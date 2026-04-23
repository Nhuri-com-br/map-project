import { useCallback, useRef, useState } from 'react'
import './App.css'
import { useGetPokemon } from './hooks/pokeapi/useGetPokemon'
import type { Pokemon } from './types/pokeapi/pokemon'

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>()
  const { fetchPokemon } = useGetPokemon();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = useCallback(async () => {
    const randomNumber = Math.floor(Math.random() * 386) + 1;
    const result = await fetchPokemon(randomNumber);
    console.log(result);
    setPokemon(result);
  }, [fetchPokemon]);
  const onEnterDown = useCallback((event: { key: string }) => {
    if ( event.key != "Enter" ){
      return
    }

    const pokeGuess = inputRef.current?.value;
    const pokeRight = pokemon?.name;
    const finalGuess = pokeGuess?.toLowerCase();

    console.log(finalGuess);
    console.log(pokeGuess);
    if ( finalGuess==pokeRight ) {
      alert("Acerto miseravi");
      onClick();
      
    } else {
      alert("Errou")
      
    }
  }, [onClick, pokemon?.name]);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={pokemon?.sprites.front_default} className="hiddenPokemon" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>Pokequiz</h1>
          <p>
            <input id='guess' ref={inputRef} onKeyDown={onEnterDown} />
          </p>
        </div>
        <button
          className="counter"
          onClick={onClick}
        >
          Quem é esse pokemon
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Links Importantes</h2>
          <p>Entre para a Broforce</p>
          <ul>
            <li>
              <a href="https://github.com/Nhuri-com-br" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.gg/CHPBwmTkb8" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
