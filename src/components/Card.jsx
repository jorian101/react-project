import React from "react";
import CharacterDetails from "./CharacterDetails";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ character }) => {
	return (
		//Hacia donde ira
		<NavLink to={`/character?id=${character.id}`}>
			<div className="card" id="card">
				{<CharacterDetails character={character} />}
			</div>
		</NavLink>
	);
};

export default Card;
