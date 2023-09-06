import { Route, Routes } from "react-router-dom";
import { Base, Home } from "./views";
import { Navigate } from "react-router-dom";
import allProjects from "./constants/allProjects";
import gameProjects from "./constants/gameProjects";
import libraryProjects from "./constants/libraryProjects";
import webAppProjects from "./constants/webAppProjects";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route
					path="/home/*"
					element={
						<Base
							title="Home"
							projectHierarchy={allProjects}
							children={<Home />}
						/>
					}
				/>
				<Route
					path="/games/*"
					element={
						<Base title="Games" projectHierarchy={gameProjects} />
					}
				/>
				<Route
					path="/libraries/*"
					element={
						<Base
							title="Libraries"
							projectHierarchy={libraryProjects}
						/>
					}
				/>
				<Route
					path="/webapps/*"
					element={
						<Base
							title="Web Apps"
							projectHierarchy={webAppProjects}
						/>
					}
				/>
				<Route
					path="/contact"
					element={
						<Base
							title="Contact Me"
							projectHierarchy={gameProjects}
						/>
					}
				/>
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</>
	);
};
export default App;
