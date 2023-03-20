const getDataAPI = (url) => {
    return fetch(url).then((response) => response.json());
}

export const getPokemonList = (url) => {
    return getDataAPI(url).then((data) => 
    Promise.all(
        data.results.map((pokemon) => {
            return getDataAPI(pokemon.url);
        })
    ));
};