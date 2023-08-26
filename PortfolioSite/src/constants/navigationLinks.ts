import {
	AiFillHome,
	AiFillMessage,
} from "react-icons/ai";
import { MdLibraryBooks, MdWeb } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import {IconType} from "react-icons";

export interface NavLink {
	title: string;
	id: string;
	icon: IconType;
	actionOverride?: () => void;
}

export const navLinksTop : Array<NavLink> = [
	{
		title: "Home",
		id: "home",
		icon: AiFillHome,
	},
	{
		title: "Games",
		id: "games",
		icon: IoGameControllerSharp,
	},
	{
		title: "Libraries",
		id: "libraries",
		icon: MdLibraryBooks,
	},
	{
		title: "Web Apps",
		id: "webapps",
		icon: MdWeb,
	},
];

export const navLinksBottom : Array<NavLink> = [
	{
		title: "Contact Me",
		id: "contact",
		icon: AiFillMessage,
	},
];
