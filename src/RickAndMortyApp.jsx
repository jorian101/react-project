import Character from "./components/Character";
import Card from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function RickAndMortyApp() {
    const [characters, setCharacters] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setCharacters([data]))
    }, [id]);

    return (
        <div>
            {characters.map((character) => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    );
}

export default RickAndMortyApp;
