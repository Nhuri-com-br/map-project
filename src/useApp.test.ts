import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { useApp } from './useApp';
import { useGetPokemon } from './hooks/pokeapi/useGetPokemon';

// Mock do hook de busca
vi.mock('./hooks/pokeapi/useGetPokemon', () => ({
  useGetPokemon: vi.fn(),
}));

describe('useApp', () => {
  const mockFetchPokemon = vi.fn();
  const mockPokemon = { name: 'pikachu', id: 25 };

  beforeEach(() => {
    vi.clearAllMocks();
    (useGetPokemon as Mock).mockReturnValue({ fetchPokemon: mockFetchPokemon });
    mockFetchPokemon.mockResolvedValue(mockPokemon);
    
    // Mock do window.alert
    vi.stubGlobal('alert', vi.fn());
  });

  it('deve inicializar com pokemon indefinido', () => {
    const { result } = renderHook(() => useApp());
    expect(result.current.pokemon).toBeUndefined();
  });

  it('deve buscar um pokemon ao executar onClick', async () => {
    const { result } = renderHook(() => useApp());

    await act(async () => {
      await result.current.onClick();
    });

    expect(mockFetchPokemon).toHaveBeenCalled();
    expect(result.current.pokemon).toEqual(mockPokemon);
  });

  it('deve alertar "Acerto miseravi" e resetar quando o palpite estiver correto', async () => {
    const { result } = renderHook(() => useApp());

    // 1. Carrega um pokemon inicial
    await act(async () => {
      await result.current.onClick();
    });

    // 2. Simula o valor no inputRef
    result.current.inputRef.current = { value: 'pikachu' } as HTMLInputElement;

    // 3. Dispara o Enter
    await act(async () => {
      result.current.onEnterDown({ key: 'Enter' });
    });

    expect(window.alert).toHaveBeenCalledWith('Acerto miseravi');
    expect(result.current.inputRef.current.value).toBe("");
    // Verifica se buscou o próximo pokemon após acertar
    expect(mockFetchPokemon).toHaveBeenCalledTimes(2);
  });

  it('deve alertar "Errou" quando o palpite estiver incorreto', async () => {
    const { result } = renderHook(() => useApp());

    await act(async () => {
      await result.current.onClick(); // pikachu
    });

    result.current.inputRef.current = { value: 'charmander' } as HTMLInputElement;

    act(() => {
      result.current.onEnterDown({ key: 'Enter' });
    });

    expect(window.alert).toHaveBeenCalledWith('Errou');
    expect(mockFetchPokemon).toHaveBeenCalledTimes(1); // Não busca novo pokemon
  });

  it('não deve fazer nada se a tecla pressionada não for Enter', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.onEnterDown({ key: 'Escape' });
    });

    expect(window.alert).not.toHaveBeenCalled();
  });
});