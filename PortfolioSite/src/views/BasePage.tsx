import React from "react";
import { useState } from "react";
import { useMove } from "@react-aria/interactions";
import { Navbar, Sidebar } from "../components";
import { ProjectHierarchy } from "../types/Project";
import ProjectHierarchyComponent from "../components/ProjectHierarchy";
import ChatCompletion from "../components/ChatCompletion";
import { FileView } from "../components/FileView";
import { FaFaceSmile } from "react-icons/fa6";
import RandomFace from "../components/RandomFace";
import type * as CSS from "csstype";
import { set } from "firebase/database";

interface BaseProps {
	title: string;
	children?: React.ReactNode;
	projectHierarchy: ProjectHierarchy;
}

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const Base = ({ children, projectHierarchy }: BaseProps) => {
	const [active, setActive] = useState(false);
	const [dragging, setDragging] = useState(false);
	const [dragX, setDragX] = useState(0);
	const [mainLeft, setMainLeft] = useState(0);
	const [face, setFace] = useState<React.ReactNode>(<FaFaceSmile />);

	const projectHierarchyWidth: () => number = () => {
		return Math.min(768, Math.max(200, window.screen.width * 0.2));
	};

	const dragOpenThreshold = projectHierarchyWidth() / 3;
	const dragCloseThreshold = -projectHierarchyWidth() / 4;

	const toggleActive: (active: boolean) => void = (prev) => {
		setActive(!prev);
		setMainLeft(mainLeftBase(!prev));
		setTimeout(() => {
			setFace(RandomFace({}));
		}, 50);
		setTimeout(() => {
			setFace(<FaFaceSmile />);
		}, 700);
	};

	const contentStyle: () => Style = () => {
		return {
			overflowY: "unset",
			width: `${
				active
					? "calc(100vw -" + (projectHierarchyWidth() + 50) + "px)"
					: "calc(100vw - 100px)"
			}`,
			transition: `margin 0.3s ease-in-out`,
			maxWidth: "100vw",
			overlowX: "hidden",
		};
	};

	const mainLeftBase: (isActive: boolean) => number = (isActive) => {
		return isActive ? 0 : -projectHierarchyWidth();
	};

	let { moveProps } = useMove({
		onMoveStart() {
			setDragX(0);
			setDragging(true);
		},
		onMove(e) {
			setDragX((prev) => prev + e.deltaX);
			setDragging(true);
			setMainLeft(
				Math.min(
					0,
					Math.max(
						mainLeftBase(active) + dragX,
						-projectHierarchyWidth()
					)
				)
			);
		},
		onMoveEnd() {
			setDragging(false);
			if (
				(dragX > dragOpenThreshold && !active) ||
				(dragX < dragCloseThreshold && active)
			) {
				toggleActive(active);
			} else {
				setMainLeft(mainLeftBase(active));
			}
		},
	});

	return (
		<>
			<div className="bg-background max-w-[100vw] max-h-[100vh] overflow-x-clip">
				<ChatCompletion prompt="Hello" systemMessage="Hello" />
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
					className={`fixed top-0 left-0 pt-[50px] h-full flex flex-row place-items-center justify-start`}
					style={{
						transitionProperty: "left",
						transitionDuration: `${dragging ? "0s" : "0.3s"}`,
						transitionTimingFunction: "ease-in-out",
						width: `calc(100vw + ${projectHierarchyWidth()}px)})`,
						left: `${mainLeft}px`,
					}}
				>
					<ProjectHierarchyComponent
						hierarchy={projectHierarchy}
						width={projectHierarchyWidth()}
						dragHandleSlot={
							<div
								{...moveProps}
								className="w-20 h-full z-20 opacity-0"
							/>
						}
					/>
					<div
						className={`flex flex-col items-start ml-0${
							active ? "" : "md:ml-40"
						}`}
						style={contentStyle()}
					>
						{children ? children : <FileView />}
					</div>
				</div>
			</div>
		</>
	);
};

export default Base;
