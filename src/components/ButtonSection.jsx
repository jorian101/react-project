import React from "react";
import './ButtonSection.css';
const ButtonSection = ({socialLinks}) => {
	console.log(socialLinks)//arreglo con 5 objetos
	return (
		<div className="social section">
			<div className="social__links section">
				{
					socialLinks.map(
						socialLink => <button className="social__link" key={socialLink.name} >{socialLink.name}</button>
					)
				}		
			</div>
		</div>
	);
};

export default ButtonSection;
