import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import HomeCP from "./components/Home-cmp";
import LoginPage from "./components/Login"
import Member from "./components/Member";
import Register from "./components/Register";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomeCP />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/member" element={<Member />} />
					<Route exact path="/login" element={<LoginPage/>} />
					<Route exact path="/register" element={<Register/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
