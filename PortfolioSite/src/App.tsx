import React from "react";
import { Route, Routes } from "react-router-dom";
import { Base } from "./views";
import { Navigate } from "react-router-dom";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Base title="Home" />} />
				<Route path="/games" element={<Base title="Search" />} />
				<Route path="/libraries" element={<Base title="Explore" />} />
				<Route path="/webapps" element={<Base title="Settings" />} />
				<Route path="/contact" element={<Base title="Contact" />} />
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</>
	);
};
export default App;
