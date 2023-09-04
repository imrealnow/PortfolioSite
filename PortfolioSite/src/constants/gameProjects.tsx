import { FileType, Folder, GameItem, ProjectHierarchy } from "../types/Project";
import SmallJamsEmbed from "../gameEmbeds/SmallJamsEmbed";

const gameProjects: ProjectHierarchy = {
	showReturnButton: true,
	projectFolders: [
		new Folder(
			"Small-Jams",
			{
				contentType: FileType.MARKDOWN,
				name: "README",
				content: "./FileContent/SmallJams/README.md",
				parentFolder: this,
			},
			new GameItem("Play", SmallJamsEmbed()),
			{
				contentType: FileType.LINK,
				name: "Itch-io",
				content: "https://imrealnow.itch.io/small-jams",
			}
		),
		new Folder(
			"Echoes-of-Innocence",
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
			}
		),
		new Folder(
			"Something-Fishy",
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
			}
		),
		new Folder(
			"Ball-Tapper",
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
			}
		),
		new Folder(
			"Chaps-Challenge",
			{
				contentType: FileType.MARKDOWN,
				name: "README",
				content: "./FileContent/ChapsChallenge/README.md",
			},
			{
				contentType: FileType.LINK,
				name: "Github",
				content: "https://github.com/imrealnow/ChapsChallenge",
			}
		),
	],
};

export default gameProjects;
