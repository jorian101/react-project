import React from "react";
import "./HomeButton.css";
import { NavLink } from "react-router-dom";

const HomeButton = ({ character }) => {
	return ( 
        <NavLink to="/home">
			<div className="button-home">
                <button>HOME</button>
            </div>
		</NavLink>
        
	);
};

export default HomeButton;
