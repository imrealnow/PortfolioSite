import React from "react";
import { useState } from "react";
import { Navbar, Sidebar } from "../components";
import { ProjectHierarchy } from "../types/Project";
import ProjectHierarchyComponent from "../components/ProjectHierarchy";
import { FileView } from "../components/FileView";
import { FaFaceSmile } from "react-icons/fa6";
import RandomFace from "../components/RandomFace";
import { useWindowDimensions } from "../utils/windowDimensions";
import type * as CSS from "csstype";

interface BaseProps {
	title: string;
	children?: React.ReactNode;
	projectHierarchy: ProjectHierarchy;
}

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const Base = ({ children, projectHierarchy }: BaseProps) => {
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
			transition: `left 0.3s ease-in-out`,
			width: `calc(100vw + ${projectHierarchyWidth()}px)})`,
			left: active ? "0px" : `-${projectHierarchyWidth()}px`,
		};
	};

	const contentStyle: () => Style = () => {
		return {
			maxHeight: "calc(100vh-50px)",
			overflowY: "auto",
			width: `calc(100vw - ${projectHierarchyWidth() + 50}px)`,
			transition: `margin 0.3s ease-in-out`,
			// position: "relative",
			marginLeft: `${active ? "0px" : "15%"}`,
			maxWidth: "100vw",
			overlowX: "hidden",
		};
	};

	return (
		<div className="bg-background max-w-[100vw] max-h-[100vh] overflow-hidden">
			<div className={`absolute top-0 w-[50px] h-[100vh]`}>
				<Sidebar
					active={active}
					onClick={toggleActive}
					projectHierarchy={projectHierarchy}
				/>
			</div>
			<Navbar
				active={active}
				icon={face}
				projectHierarchyWidth={projectHierarchyWidth()}
			/>
			<div
				className={`absolute top-0 left-0 pt-[50px] h-full flex flex-row items-start justify-start transition-transform duration-300 ease-in-out overflow-x-clip`}
				style={translationStyle()}
			>
				<ProjectHierarchyComponent
					hierarchy={projectHierarchy}
					width={projectHierarchyWidth()}
				/>
				<div
					className={`flex flex-col items-start`}
					style={contentStyle()}
				>
					{children ? children : <FileView />}
				</div>
			</div>
		</div>
	);
};

export default Base;
