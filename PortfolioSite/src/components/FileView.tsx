import { useRecoilValue } from "recoil";
import { openFileItem } from "../atoms/openFileItem";
import { FileItem, FileType } from "../types/Project";
import Readme from "./Readme";

export const FileView: React.FC = () => {
	const currentOpenFile = useRecoilValue(openFileItem);
	const renderContent = (file: FileItem) => {
		switch (file.contentType) {
			case FileType.MARKDOWN:
				const typedMD = file as FileItem<string>;
				return <Readme path={typedMD.content} />;
			case FileType.EXECUTABLE:
				const typedEmbed = file as FileItem<React.ReactNode>;
				return (
					<div className="relative left-1/2 -translate-x-1/2">
						{typedEmbed.content}
					</div>
				);
			default:
				return <div className="pl-4">Unsupported file type</div>;
		}
	};

	if (!currentOpenFile) {
		return <div className="pl-4">No file selected</div>;
	}

	return (
		<>
			{/* Render the contents or details of the currently opened file */}
			{renderContent(currentOpenFile)}
		</>
	);
};
