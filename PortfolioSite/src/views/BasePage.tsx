import React from "react";
import { Navbar } from "../components";
import { ProjectHierarchy } from "../types/Project";
import ProjectHierarchyComponent from "../components/ProjectHierarchy";

interface BaseProps {
	title: string;
	children?: React.ReactNode;
	projectHierarchy: ProjectHierarchy;
}

const Base = ({ title, children, projectHierarchy }: BaseProps) => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			<div className="absolute bg-primary w-full h-3">
				<Navbar title={title} />
			</div>
			<div className="bg-background h-[calc(100vh-50px)] w-full fixed top-[50px]" />
			<div className="h-[calc(100vh-50px)] w-full absolute top-[50px] flex">
				<ProjectHierarchyComponent hierarchy={projectHierarchy} />
				{children ?? children}
			</div>
		</div>
	);
};

export default Base;
