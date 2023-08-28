import React from "react";
import { Disclosure } from "@headlessui/react";
import { FileItem, ProjectFolder, ProjectHierarchy } from "../types/Project";
import { FaAngleRight } from "react-icons/fa";
import IconForFileType from "./IconForFileType";
import { openFileItem } from "../atoms/openFileItem";
import { useRecoilState } from "recoil";
import type * as CSS from "csstype";

const FileItemComponent: React.FC<{ file: FileItem }> = ({ file }) => {
	const [openFile, setOpenFile] = useRecoilState(openFileItem);

	const handleFileClick = () => {
		setOpenFile(file);
	};

	return (
		<div
			onClick={handleFileClick}
			className="inline-flex items-center w-full text-md gap-2 pl-2 cursor-pointer text-stone-400 hover:text-stone-300 hover:bg-stone-400 hover:bg-opacity-50"
		>
			<IconForFileType type={file.type} /> {file.name}
			{file.type.toString()}
		</div>
	);
};

const ProjectFolderComponent: React.FC<{ folder: ProjectFolder }> = ({
	folder,
}) => {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className="flex justify-start items-center w-full pl-4 text-lg hover:bg-stone-400 hover:bg-opacity-50 text-stone-300 font-normal font-mono text-left">
						<FaAngleRight
							className={`${
								open ? "transform rotate-90" : ""
							} w-5 h-5`}
						/>
						{folder.name}
					</Disclosure.Button>
					<Disclosure.Panel className="flex flex-col box-content mb-4 ml-8 hover:border-l-2 border-stone-400">
						{folder.files.map((file, idx) => (
							<FileItemComponent key={idx} file={file} />
						))}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

const ProjectHierarchyComponent: React.FC<{
	hierarchy: ProjectHierarchy;
	width: number;
}> = ({ hierarchy, width }) => {
	const widthStyle: () => CSS.PropertiesHyphen = () => {
		return {
			width: Math.floor(width) + "px",
			"min-width": Math.floor(width) + "px",
		};
	};
	return (
		<div
			className={`flex flex-col items-start min-h-full px-4 bg-gray-800 rounded-none`}
			style={widthStyle()}
		>
			{hierarchy.map((folder, idx) => (
				<ProjectFolderComponent key={idx} folder={folder} />
			))}
		</div>
	);
};

export default ProjectHierarchyComponent;
