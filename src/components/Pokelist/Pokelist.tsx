import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokelist.css";
import styled from 'styled-components';

const Title = styled.h4`
  font-size: 1.5em;
  text-align: center;
  margin: 100px auto;
  max-width: 400px;
  color: black;
  font-family: "Press Start 2P", cursive;
`;

interface PokelistProps {
    pokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void;
}

const Pokelist = ({ pokemons, onPokemonClick }: PokelistProps) => {
    return (
        <div className="pokelist">
            {!pokemons.length ? (
                <Title>No Pokemon Available</Title>
            ) : pokemons.map(pokemon => (
                        <>
                            {pokemon.name && (
                                <>
                                    <Pokecard
                                        key={pokemon.id}
                                        name={pokemon.name}
                                        spriteUrl={pokemon.sprites.normal}
                                        onPokemonClick={onPokemonClick}
                                    />
                                </>
                            )}
                        </>
                )
            )}
        </div>
    );
};

export default Pokelist;
