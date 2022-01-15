import React, { useState, useEffect, Component } from "react";
import { useHistory } from "react-router-dom";

import Button from "../componentse/Button/Button";
import Modal from "../componentse/Modal/Modal";

function HomePage() {
	const [show, setShow] = useState();
	const onClickClose = () => {
		setShow(false);
	};

	const hsitory = useHistory();

	return (
		<>
			<div className="App hight-100-percentage width-100-percentage ">
				<h1 className="font-size-larger">Heading 1</h1>
				<h2 className="font-size-large">Heading 2</h2>
				<h3 className="font-size-medium">Heading 3</h3>
				<h4 className="font-size-default">Heading 4</h4>
				<h5 className="font-size-small">Heading 5</h5>
				<h6 className="font-size-smaller">Heading 6</h6>
				<a href={"#modalusage"}>Navigate</a>
				<Button
					title={"Modal usage"}
					onClick={() => {
						hsitory.push("/modal");
					}}
				/>
			</div>
		</>
	);
}

export default HomePage;
