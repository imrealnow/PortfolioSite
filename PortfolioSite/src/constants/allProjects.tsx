import { ProjectHierarchy } from "../types/Project";

const allProjects: ProjectHierarchy = {
	showReturnButton: false,
	projectFolders: [
		{
			name: "Games",
			files: [],
			onClickNavigate: "/games",
		},
		{
			name: "Libraries",
			files: [],
			onClickNavigate: "/libraries",
		},
		{
			name: "Web Apps",
			files: [],
			onClickNavigate: "/webapps",
		},
		{
			name: "Contact Me",
			files: [],
			onClickNavigate: "/contact",
		},
	],
};

export default allProjects;
