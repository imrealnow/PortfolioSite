import { ProjectHierarchy } from "../types/Project";

const allProjects: ProjectHierarchy = {
	showReturnButton: false,
	projectFolders: [
		{
			name: "Games",
			files: [],
			onClickNavigate: "/games",
			findReadme: () => null,
		},
		{
			name: "Libraries",
			files: [],
			onClickNavigate: "/libraries",
			findReadme: () => null,
		},
		{
			name: "Web Apps",
			files: [],
			onClickNavigate: "/webapps",
			findReadme: () => null,
		},
	],
};

export default allProjects;
