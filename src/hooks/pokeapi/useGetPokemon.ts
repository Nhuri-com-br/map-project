import { useCallback } from "react";
import type { Pokemon } from "../../types/pokeapi/pokemon";

export const useGetPokemon = () => {
    const fetchPokemon: (dexNumber: number) => Promise<Pokemon> = useCallback(async (dexNumber) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${dexNumber}`);
        return await response.json();
    }, [])
    return {
        fetchPokemon,
    }
};