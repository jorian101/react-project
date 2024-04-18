import React from "react";
import CharacterDetails from "./CharacterDetails";
import "./Card.css";

const Card = (props) => {
	const character = props.character;
	return (
		<div className="body">
			<div className="card" id="card">
				{<CharacterDetails character={character} />}
			</div>
		</div>
	);
};

export default Card;
