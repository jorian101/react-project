import Card from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchRandomCharacters() {
            const randomIds = [];
            while (randomIds.length < 10) {
                const randomId = Math.floor(Math.random() * 826) + 1;
                if (!randomIds.includes(randomId)) {
                    randomIds.push(randomId);
                }
            }
            const promises = randomIds.map(id =>
                fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.json())
            );
            const charactersData = await Promise.all(promises);
            setCharacters(charactersData);
        }

        fetchRandomCharacters();
    }, []);

    return (
        <>
            <div>
                {characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </>
    );
}

export default App;
