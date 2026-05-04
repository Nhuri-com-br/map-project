import './App.css'
import { useApp } from './useApp'

function App() {
  const { pokemon, inputRef, onEnterDown, onClick, } = useApp();

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
