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
			case FileType.LINK:
				return <div className="pl-4">Redirecting...</div>;
			default:
				return <div className="pl-4">Unsupported file type</div>;
		}
	};

	if (!currentOpenFile) {
		return (
			<div className="relative w-96 h-96 left-1/2 -translate-x-1/2 origin-top">
				<svg
					id="e2BePtbGJhQ1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 300 300"
					shapeRendering="geometricPrecision"
					textRendering="geometricPrecision"
				>
					<path
						d="M66.17568,269.14837v-201.66042h54.23037v147.42953h147.43005v54.23089h-201.66042ZM267.8361,214.91748v-147.42953v0v147.42953Z"
						transform="translate(-17.00589-18.31816)"
						fill="#161616"
						strokeWidth="0"
					/>
					<path
						d="M250.83021,49.16979v54.09748h-54.21639v.00001h-83.0743v-54.09749h137.29069Zm-54.21639,76.94476v-22.84727h54.21639v22.84727h-54.21639Zm.00001,41.63755h-39.51836v-22.84728h93.73474v41.7758h-54.21638v-18.92852Z"
						fill="#161616"
						strokeWidth="0"
					/>
				</svg>
				<h1 className="text-2xl text-center text-slate-600">
					Select a file to view
				</h1>
			</div>
		);
	}

	return (
		<>
			{/* Render the contents or details of the currently opened file */}
			{renderContent(currentOpenFile)}
		</>
	);
};
