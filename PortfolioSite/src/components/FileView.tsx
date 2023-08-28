import { useRecoilValue } from "recoil";
import { openFileItem } from "../atoms/openFileItem";
import { FileItem, FileType } from "../types/Project";
import Readme from "./Readme";

export const FileView: React.FC = () => {
	const currentOpenFile = useRecoilValue(openFileItem);
	const renderContent = (file: FileItem) => {
		switch (file.type) {
			case FileType.MARKDOWN:
				return <Readme path={file.content} />;
			default:
				return <div className="pl-4">Unsupported file type</div>;
		}
	};

	if (!currentOpenFile) {
		return <div className="pl-4">No file selected</div>;
	}

	return (
		<div>
			{/* Render the contents or details of the currently opened file */}
			{renderContent(currentOpenFile)}
		</div>
	);
};
