import React, { useState, useEffect} from "react";
import "./UserDetails.css";
const UserDetails = ({user}) => {
	// const user = props.user;
	return (
		<div>
			<div className="img-container">
				<img src={user.avatar} alt={`avatar de ${user.name}`} />
			</div>
			<div className="personal section">
				<h2 className="personal__name">{user.name}</h2>
				<p className="personal__address">{user.location}</p>
			</div>
			<p className="social__intro">{user.description}</p>
		</div>
	);
};

export default UserDetails;
