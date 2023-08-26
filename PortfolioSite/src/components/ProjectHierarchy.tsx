import React from "react";
import { Disclosure } from "@headlessui/react";
import { FileItem, ProjectFolder, ProjectHierarchy } from "../types/Project";
import { FaAngleRight } from "react-icons/fa";
import IconForFileType from "./IconForFileType";

const FileItemComponent: React.FC<{ file: FileItem }> = ({ file }) => {
	return (
		<div className="inline-flex items-center w-full text-md gap-2 pl-2 cursor-pointer text-stone-400 hover:text-stone-300 hover:bg-stone-400 hover:bg-opacity-50">
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

const ProjectHierarchyComponent: React.FC<{ hierarchy: ProjectHierarchy }> = ({
	hierarchy,
}) => {
	return (
		<div className="flex flex-col items-start absolute top-0 left-0 w-1/5 min-w-[300px] h-full max-w-sm pl-4 xs:pl-12 bg-gray-800 rounded-none">
			{hierarchy.map((folder, idx) => (
				<ProjectFolderComponent key={idx} folder={folder} />
			))}
		</div>
	);
};

export default ProjectHierarchyComponent;
