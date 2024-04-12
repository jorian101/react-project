import Card from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://661037d00640280f219c98f1.mockapi.io/api/v2/users")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setUsers(data);
				// console.log(data);
			});
	}, []); //users es una arreglo, iteraremos con map
	return (
		<>
			<div>
				{users.map((user) => (
					<Card key={user.id} user={user} />
				))}
			</div>
		</>
	);
}

export default App;
