import React from "react";
import "./Details.css";
const Details = ({ character }) => {
	return (
		<div className="character-info">
			<img src={character.image} alt={`avatar de ${character.name}`} />
			<div className="character__data">
				<h2>| {character.status} |</h2>
                <p>Type: {character.type}</p>
			</div>
		</div>
	);
};

export default Details;
