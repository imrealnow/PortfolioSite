import React from "react";
import { useState } from "react";
import { Navbar, Sidebar } from "../components";
import { ProjectHierarchy } from "../types/Project";
import ProjectHierarchyComponent from "../components/ProjectHierarchy";
import { FileView } from "../components/FileView";
import { FaFaceSmile } from "react-icons/fa6";
import RandomFace from "../components/RandomFace";
import type * as CSS from "csstype";

interface BaseProps {
	title: string;
	children?: React.ReactNode;
	projectHierarchy: ProjectHierarchy;
}

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const Base = ({ title, children, projectHierarchy }: BaseProps) => {
	const [active, setActive] = useState(true);
	const [face, setFace] = useState<React.ReactNode>(<FaFaceSmile />);

	const projectHierarchyWidth: () => number = () => {
		return Math.min(768, Math.max(200, window.screen.width * 0.2));
	};

	const toggleActive: (active: boolean) => void = (prev) => {
		setActive(!prev);
		setTimeout(() => {
			setFace(RandomFace({}));
		}, 50);
		setTimeout(() => {
			setFace(<FaFaceSmile />);
		}, 700);
	};

	const translationStyle: () => Style = () => {
		return {
			transform: `translateX(${active ? 0 : -projectHierarchyWidth()}px)`,
		};
	};

	return (
		<div className="bg-background w-full h-full overflow-hidden">
			<div className={`absolute top-0 w-[50px] h-[100vh]`}>
				<Sidebar
					active={active}
					onClick={toggleActive}
					projectHierarchy={projectHierarchy}
				/>
			</div>
			<div className="absolute top-0 left-0 w-full h-full">
				<Navbar
					title={title}
					active={active}
					icon={face}
					projectHierarchyWidth={projectHierarchyWidth()}
				/>
			</div>
			<div
				className={`absolute top-[50px] left-[50px] flex flex-row items-start justify-start w-full h-full transition-transform duration-300 ease-in-out `}
				style={translationStyle()}
			>
				<ProjectHierarchyComponent
					hierarchy={projectHierarchy}
					width={projectHierarchyWidth()}
				/>
				<div className={`h-full w-full flex flex-col items-start`}>
					{children ? children : <FileView />}
				</div>
			</div>
		</div>
	);
};

export default Base;
