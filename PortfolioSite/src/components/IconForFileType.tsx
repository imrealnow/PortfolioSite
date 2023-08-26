import React from "react";
import {
	FaFileImage, // Image
	FaFileAlt, // Markdown
	FaFileCode, // Executable
} from "react-icons/fa";
import { IconType } from "react-icons";
import { FileType } from "../types/Project";

interface IconForFileTypeProps {
	type: FileType;
	colour?: string;
	className?: string;
}

const IconForFileType: React.FC<IconForFileTypeProps> = ({
	type,
	colour,
	className,
}) => {
	let Icon: IconType;

	switch (type) {
		case FileType.IMAGE:
			Icon = FaFileImage;
			break;
		case FileType.MARKDOWN:
			Icon = FaFileAlt;
			break;
		case FileType.EXECUTABLE:
			Icon = FaFileCode;
			break;
		default:
			return null; // Or you can return a default icon if desired
	}

	return (
		<Icon className={(colour ? "text-[" + colour + "]" : "") + className} />
	);
};

export default IconForFileType;
