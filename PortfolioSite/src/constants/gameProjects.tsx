import {
	FileType,
	FileItem,
	GameItem,
	ProjectHierarchy,
} from "../types/Project";
import SmallJamsEmbed from "../gameEmbeds/SmallJamsEmbed";
import React from "react";

const gameProjects: ProjectHierarchy = {
	showReturnButton: true,
	projectFolders: [
		{
			name: "Small Jams",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "./FileContent/ZombiesArePeopleToo/readme.md",
				},
				new GameItem("Play-Small-Jams", SmallJamsEmbed()),
			],
		},
		{
			name: "Echoes of Innocence",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "",
				},
				{
					contentType: FileType.EXECUTABLE,
					name: "Play",
					content: "",
				},
			],
		},
		{
			name: "Something Fishy",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "",
				},
			],
		},
		{
			name: "Ball Tapper",
			files: [
				{
					contentType: FileType.MARKDOWN,
					name: "README",
					content: "",
				},
			],
		},
	],
};

export default gameProjects;
