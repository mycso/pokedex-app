import "./Searchbox.css";

interface SearchboxProps {
    search: any;
    setSearch: (inputValue: string) => void;
}

const Searchbox = ({ setSearch }: SearchboxProps) => {
    
    return (
        <input
            className="search"
            onChange={(e) => {
                setSearch(e.target.value);
            }}
            type="search"
            placeholder="Search Pokemons"
        />
    );
};

export default Searchbox;
