import React from "react";
import "./Character.css";
import Details from "./Details";
import Episodes from "./Episodes";
import HomeButton from "./HomeButton";

const Character = ({ character }) => {
	return (
        <div className="character">
			<div className="character__section">
				<Details character={character} />
				<Episodes character={character} />
				<HomeButton character={character} />
			</div>
		</div>
	);
};

export default Character;
