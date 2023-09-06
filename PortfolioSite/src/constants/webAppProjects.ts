import { FileType, Folder, ProjectHierarchy } from "../types/Project";
const webAppProjects: ProjectHierarchy = {
	showReturnButton: true,
	projectFolders: [
		new Folder("PortfolioSite", {
			contentType: FileType.MARKDOWN,
			name: "README",
			content: "./FileContent/PortfolioSite/README.md",
		}),
		new Folder(
			"FableFusion",
			{
				contentType: FileType.MARKDOWN,
				name: "README",
				content: "./FileContent/FableFusion/README.md",
			},
			{
				contentType: FileType.LINK,
				name: "FableFusion",
				content: "https://fablefusion.tools",
			}
		),
	],
};

export default webAppProjects;
