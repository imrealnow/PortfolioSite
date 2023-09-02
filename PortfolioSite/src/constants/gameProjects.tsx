import { FileType, GameItem, ProjectHierarchy } from "../types/Project";
import SmallJamsEmbed from "../gameEmbeds/SmallJamsEmbed";

const gameProjects: ProjectHierarchy = {
	showReturnButton: true,
	projectFolders: [
		{
			name: "Small Jams",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "./FileContent/SmallJams/README.md",
				},
				new GameItem("Play-Small-Jams", SmallJamsEmbed()),
				{
					contentType: FileType.LINK,
					name: "Itch-io",
					content: "https://imrealnow.itch.io/small-jams",
				},
			],
		},
		{
			name: "Echoes of Innocence",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "./FileContent/EchoesOfInnocence/README.md",
				},
				{
					contentType: FileType.EXECUTABLE,
					name: "Play",
					content: "",
				},
				{
					contentType: FileType.LINK,
					name: "Itch-io",
					content: "https://dkamx.itch.io/echoes-of-innocence",
				},
			],
		},
		{
			name: "Something Fishy",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "./FileContent/SomethingFishy/README.md",
				},
				{
					contentType: FileType.LINK,
					name: "Google-Play",
					content:
						"https://play.google.com/store/apps/details?id=com.liamgreen.SomethingFishy",
				},
				{
					contentType: FileType.LINK,
					name: "Github",
					content: "https://github.com/imrealnow/SomethingFishy",
				},
			],
		},
		{
			name: "Ball Tapper",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "./FileContent/BallTapper/README.md",
				},
				{
					contentType: FileType.LINK,
					name: "Google-Play",
					content:
						"https://play.google.com/store/apps/details?id=com.realnow.balltapper",
				},
			],
		},
		{
			name: "Chaps Challenge",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "./FileContent/ChapsChallenge/README.md",
				},
				{
					contentType: FileType.LINK,
					name: "Github",
					content: "https://github.com/imrealnow/ChapsChallenge",
				},
			],
		},
	],
};

export default gameProjects;
