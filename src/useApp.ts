import { useCallback, useRef, useState } from "react";
import type { Pokemon } from "./types/pokeapi/pokemon";
import { useGetPokemon } from "./hooks/pokeapi/useGetPokemon";

export const useApp = () => {
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
            inputRef.current!.value = "";
            
        } else {
            alert("Errou");
            
        }
    }, [onClick, pokemon?.name]);
   
    return {
        pokemon,
        inputRef,
        onEnterDown,
        onClick,   
    }
};