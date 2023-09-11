import React from "react";
import { Disclosure } from "@headlessui/react";
import {
	FileItem,
	FileType,
	ProjectFolder,
	ProjectHierarchy,
} from "../types/Project";
import { FaAngleRight } from "react-icons/fa";
import IconForFileType from "./IconForFileType";
import { openFileItem } from "../atoms/openFileItem";
import { useSetRecoilState, useRecoilState } from "recoil";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import { useNavigate } from "react-router-dom";

const FileItemComponent: React.FC<{ file: FileItem }> = ({ file }) => {
	const [openFile, setOpenFile] = useRecoilState(openFileItem);

	const handleFileClick: React.MouseEventHandler = (e) => {
		e.preventDefault();
		setOpenFile(file);
		if (file.contentType === FileType.LINK) {
			window.open(file.content, "_blank");
		}
	};

	const isOpenFile = (): boolean =>
		openFile?.name === file.name && openFile?.content === file.content;

	return (
		<span
			onClick={handleFileClick}
			className={`${isOpenFile() ? "bg-stone-400 bg-opacity-50" : ""}
			inline-flex items-center w-full text-md gap-2 pl-2 cursor-pointer text-stone-400 hover:text-stone-300 hover:bg-stone-400 hover:bg-opacity-50
			`}
		>
			<IconForFileType type={file.contentType} /> {file.name}
			{file.contentType.toString()}
		</span>
	);
};

const ProjectFolderComponent: React.FC<{ folder: ProjectFolder }> = ({
	folder,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const navigate = useNavigate();
	const setOpenFile = useSetRecoilState(openFileItem);

	const hasFiles = folder.files.length > 0;
	return (
		<span
			onClick={
				folder.onClickNavigate !== undefined
					? () => navigate("" + folder.onClickNavigate)
					: () => {}
			}
			id={folder.name}
		>
			<Disclosure defaultOpen={isOpen}>
				{({ open }) => (
					<>
						<Disclosure.Button
							onClick={() => {
								setIsOpen(!isOpen);
								const readme = folder.findReadme();
								if (readme && !isOpen) {
									console.log("readme", readme);
									setOpenFile(readme);
								}
							}}
							className="flex flex-row justify-start items-start w-full pl-8 text-lg hover:bg-stone-400 hover:bg-opacity-50 text-stone-300 font-normal font-mono text-left select-none"
						>
							<FaAngleRight
								className={`${
									hasFiles && open ? "rotate-90" : ""
								} relative top-0 translate-y-1/4 w-5 h-5`}
							/>
							{folder.name}
						</Disclosure.Button>
						{hasFiles && (
							<Disclosure.Panel className="flex flex-col box-content mb-1 ml-8 hover:border-l-2 border-stone-400">
								{folder.files.map((file, idx) => (
									<FileItemComponent key={idx} file={file} />
								))}
							</Disclosure.Panel>
						)}
					</>
				)}
			</Disclosure>
		</span>
	);
};

const ProjectHierarchyComponent: React.FC<{
	hierarchy: ProjectHierarchy;
	width: number;
	selectedProject?: string;
	dragHandleSlot?: React.ReactNode;
	moveProps: DOMAttributes<FocusableElement>;
}> = ({ hierarchy, width, dragHandleSlot, moveProps }) => {
	const navigate = useNavigate();

	return (
		<>
			<div
				className={`relative flex flex-col items-start min-h-full ml-10 h-full bg-gray-800 rounded-none overflow-y-none z-10 touch-none`}
				{...moveProps}
				style={{
					width: Math.floor(width + 10) + "px",
					height: "100%",
				}}
			>
				{hierarchy.showReturnButton && (
					<>
						<button
							className="flex flex-row items-center w-full bg-[#384d4f] text-stone-300 font-mono font-normal text-lg text-left pl-4 hover:bg-stone-400 hover:bg-opacity-50"
							onClick={() => navigate("/home")}
						>
							<FaAngleRight className="w-5 h-5" /> Home{" "}
						</button>
					</>
				)}
				{hierarchy.projectFolders.map((folder, idx) => (
					<ProjectFolderComponent key={idx} folder={folder} />
				))}
			</div>
			{dragHandleSlot}
		</>
	);
};

export default ProjectHierarchyComponent;
