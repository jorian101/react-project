import React from "react";
import "./CharacterDetails.css";
const UserDetails = ({ character }) => {
	return (
		<div>
			<div className="img-container">
				<img src={character.image} alt={`avatar de ${character.name}`} />
			</div>
			<div className="character section">
				<h2 className="character__name">{character.name}</h2>
				<p className="character__status">Status: {character.status}</p>
			</div>
			<p className="character__data">Species: {character.species}</p>
			<p className="character__data">Gender: {character.gender}</p>
		</div>
	);
};

export default UserDetails;
