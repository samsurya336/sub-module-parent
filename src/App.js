import React from "react";
import Button from "./componentse/Button/Button";
import Modal from "./componentse/Modal/Modal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ModalUsage from "./componentse/Modal/ModalUsage";
import "./App.css";
import InputBoxUsage from "./componentse/InputBox/InputBoxUsage";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/modal" component={ModalUsage} />
				<Route path="/inputbox" component={InputBoxUsage} />
			</Switch>
		</Router>
	);
}

export default App;
