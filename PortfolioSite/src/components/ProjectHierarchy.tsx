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
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import type * as CSS from "csstype";

const FileItemComponent: React.FC<{ file: FileItem }> = ({ file }) => {
	const setOpenFile = useSetRecoilState(openFileItem);

	const handleFileClick = () => {
		setOpenFile(file);
	};

	return (
		<a
			href={file.contentType === FileType.LINK ? file.content : "#"}
			onClick={handleFileClick}
			className="inline-flex items-center w-full text-md gap-2 pl-2 cursor-pointer text-stone-400 hover:text-stone-300 hover:bg-stone-400 hover:bg-opacity-50"
		>
			<IconForFileType type={file.contentType} /> {file.name}
			{file.contentType.toString()}
		</a>
	);
};

const ProjectFolderComponent: React.FC<{ folder: ProjectFolder }> = ({
	folder,
}) => {
	const navigate = useNavigate();
	const hasFiles = folder.files.length > 0;
	return (
		<span
			onClick={
				folder.onClickNavigate
					? () => navigate("" + folder.onClickNavigate)
					: () => {}
			}
			id={folder.name}
		>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-start items-center w-full pl-8 text-lg hover:bg-stone-400 hover:bg-opacity-50 text-stone-300 font-normal font-mono text-left">
							<FaAngleRight
								className={`${
									hasFiles && open ? "rotate-90" : ""
								} w-5 h-5`}
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
}> = ({ hierarchy, width }) => {
	const widthStyle: () => CSS.PropertiesHyphen = () => {
		return {
			width: Math.floor(width + 10) + "px",
			height: "100%",
		};
	};
	const navigate = useNavigate();
	return (
		<div
			className={`relative flex flex-col items-start min-h-full ml-10 h-full bg-gray-800 rounded-none overflow-y-none`}
			style={widthStyle()}
		>
			{hierarchy.showReturnButton && (
				<>
					<button
						className="flex flex-row items-center w-full bg-[#384d4f] text-stone-300 font-mono font-normal text-lg text-left pl-4 hover:bg-stone-400 hover:bg-opacity-50"
						onClick={() => navigate("/")}
					>
						<FaAngleRight className="w-5 h-5" /> Home{" "}
					</button>
					<hr className="w-full border-[#496183]" />
				</>
			)}
			{hierarchy.projectFolders.map((folder, idx) => (
				<ProjectFolderComponent key={idx} folder={folder} />
			))}
		</div>
	);
};

export default ProjectHierarchyComponent;
