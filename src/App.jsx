import "./App.css";
import avatarJessica from '../src/assets/avatar-jessica.jpeg'
function App() {
	return (
		<>
			<div class="card" id="card">
				<div class="img-container">
					<img src={avatarJessica} alt="" />
				</div>
				<div class="personal section">
					<h2 class="personal__name">Jessica Randall</h2>
					<p class="personal__address">London, United Kingdom</p>
				</div>
				<div class="social section">
					<p class="social__intro">"Front-end developer and avid reader."</p>
					<div class="social__links section">
						<button class="social__link">GitHub</button>
						<button class="social__link">Frontend Mentor</button>
						<button class="social__link">LinkedIn</button>
						<button class="social__link">Twitter</button>
						<button class="social__link">Instagram</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
