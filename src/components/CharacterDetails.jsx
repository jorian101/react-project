import React from "react";
import "./CharacterDetails.css";
const CharacterDetails = ({ character }) => {
	return (
		<div className="details">
			<div className="img-container">
				<img src={character.image} alt={`avatar de ${character.name}`} />
			</div>
			<div className="character section">
				<h2>{character.name}</h2>
				<h3>Status: {character.status}</h3>
				<p>Species: {character.species}</p>
				<p>Gender: {character.gender}</p>
			</div>
		</div>
	);
};

export default CharacterDetails;
