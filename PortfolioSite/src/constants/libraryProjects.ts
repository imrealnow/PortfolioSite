import { FileType, Folder, ProjectHierarchy } from "../types/Project";

const libraryProjects: ProjectHierarchy = {
	showReturnButton: true,
	projectFolders: [
		new Folder("Shared-Variables", {
			contentType: FileType.MARKDOWN,
			name: "README",
			content: "./FileContent/SharedVariables/README.md",
		}),
		new Folder("Processing-Game-Framework", {
			contentType: FileType.MARKDOWN,
			name: "README",
			content: "./FileContent/ProcessingLibrary/README.md",
		}),
	],
};

export default libraryProjects;
