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
    pokemons: any;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokelist = ({ pokemons, onPokemonClick }: PokelistProps) => {

    return (
        <div className="pokelist">
            {!pokemons.length ? (
                <Title>No Pokemon Available</Title>
            ) : pokemons.map((pokemon: any) => (
                    <Pokecard
                        key={pokemon.id}
                        name={pokemon.name}
                        spriteUrl={pokemon.sprites.front_default}
                        onPokemonClick={onPokemonClick}
                    />
                )
            )}
        </div>
    );
};

export default Pokelist;
