import Card from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		// Genera un número aleatorio dentro del rango de páginas disponibles
		const randomPage = Math.floor(Math.random() * 42) + 1; // 42 es el número total de páginas según la API
		fetch(`https://rickandmortyapi.com/api/character?page=${randomPage}`)
			.then((res) => res.json())
			.then((data) => {
				// Se obtiene solo 10 personajes al azar
				const randomCharacters = getRandom(data.results, 10);
				setCharacters(randomCharacters);
			});
	}, []);

	// Función para obtener personajes al azar
	const getRandom = (characters, count) => {
		const shuffled = characters.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

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
