import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

const Card = (props) => {
	const user = props.user;
    const socialLinks = user["social-links"];
	return (
		<div className="body">
			<div className="card" id="card">
				{<UserDetails user={user} /> }
				<ButtonSection socialLinks={socialLinks} />
			</div>
		</div>
	);
};

export default Card;
