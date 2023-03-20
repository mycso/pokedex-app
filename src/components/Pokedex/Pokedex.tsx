import { useEffect, useState } from "react";
import styled from "styled-components";
import { spacing } from "../../styles/settings/spacing";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokelist from "../Pokelist/Pokelist";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import Searchbox from "../Searchbox/Searchbox";
import { rem } from "polished";
import "./Pokedex.css";
import { getPokemonList } from "../../core/pokemon.servce";
import PaginationButton from "../PaginationButton";

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${rem(spacing.large)};
`;


interface PokedexProps {
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({
    selectedPokemon,
    onPokemonClick,
}: PokedexProps) => {

    const [pokeData, setPokeData] = useState<any[]>([]);
    const [reservedData, setReservedData] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);

    useEffect(() => {
        getPokemonList('https://pokeapi.co/api/v2/pokemon/?limit=20').then((data: any) => {
            setPokeData(data);
            setReservedData(data);
        });
    }, []);

    useEffect(() => {
        setPokeData(reservedData.filter((pokemon) => {
            return pokemon.name.includes(search);
        }));
    }, [reservedData, search]);

    useEffect(() => {
        if(page < 0) {
            getPokemonList('https://pokeapi.co/api/v2/pokemon/?limit=20').then((data) => {
            setPokeData(data);
            setReservedData(data);
            });
        } else {
            getPokemonList('https://pokeapi.co/api/v2/pokemon/?limit=20&offset='+ page * 20).then((data) => {
                setPokeData(data);
                setReservedData(data);
            });
        }
    }, [page]);

    return (
        <>
            <div className="pokedex-container">
                <div id="scroller" className="pokelist-container">
                    <Searchbox search={ search } setSearch={ setSearch } />
                    <Pokelist 
                        onPokemonClick={onPokemonClick} 
                        pokemons={pokeData} 
                    />
                </div>
                <div className="pokesearchresult-container">
                    <PokeSearchResult selectedPokemon={selectedPokemon} />
                </div>
            </div>
            <ButtonArea>
                <PaginationButton content={ "Previous page" } setPage={ setPage } page={ page } direction={"next"}></PaginationButton>
                <PaginationButton content={ "Next page" } setPage={ setPage } page={ page } direction={"previous"}></PaginationButton>
            </ButtonArea>
        </>
    );
};

export default Pokedex;
