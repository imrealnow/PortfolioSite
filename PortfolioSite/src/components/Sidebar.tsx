import { Tooltip } from "flowbite-react";
import React from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useNavigate, useLocation } from "react-router-dom";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import {
	navLinksBottom,
	navLinksTop,
	NavLink,
} from "../constants/navigationLinks";
import { ProjectHierarchy } from "../types/Project";

interface SidebarProps {
	active: boolean;
	onClick: (active: boolean) => void;
	projectHierarchy: ProjectHierarchy;
	moveProps: DOMAttributes<FocusableElement>;
}
const Sidebar = (props: SidebarProps) => {
	let active = props.active;
	const location = useLocation();
	const isLinkCurrent: (link: NavLink) => boolean = (link) => {
		return location.pathname === "/" + link.id ? true : false;
	};

	const onClick = props.onClick;
	const navigate = useNavigate();
	const showTooltips = window.screen.width < 480 || active ? true : false;
	const buildNavLinks: (linksArray: Array<NavLink>) => React.ReactNode = (
		linksArray
	) => {
		return linksArray.map((link) => {
			return (
				<li
					key={link.title}
					className="relative content-box w-fit cursor-pointer pointer-events-auto select-none"
				>
					<span
						className={`flex items-center gap-4 justify-start border-highlightBlue focus:bg-transparent w-[50px] h-[50px] pl-[15px] transition-all hover:pl-5 hover:text-stone-300 duration-100 ease-in-out ${
							isLinkCurrent(link)
								? "text-stone-300 border-l-2 "
								: "text-stone-500 border-l-0"
						}`}
						onClick={() => {
							if (!active || (isLinkCurrent(link) && active))
								onClick(active);
							link.actionOverride
								? link.actionOverride()
								: navigate("/" + link.id);
						}}
					>
						{showTooltips === true ? (
							<button
								type="button"
								className="text-[20px] aspect-square"
							>
								{<link.icon />}
							</button>
						) : (
							<Tooltip
								content={link.title}
								placement="right-start"
								className="w-fit"
								trigger="hover"
							>
								<button
									type="button"
									className="text-[20px] aspect-square"
								>
									{<link.icon />}
								</button>
							</Tooltip>
						)}
					</span>
				</li>
			);
		});
	};
	return (
		<>
			<aside
				id="logo-sidebar"
				className={`fixed flex flex-row top-0 left-0 z-40 h-[100vh] w-[50px] touch-none`}
				{...props.moveProps}
				aria-label="Sidebar"
			>
				<div className="flex w-[50px] h-[50px] justify-start bg-shadowBlack">
					<button
						aria-controls="logo-sidebar"
						type="button"
						className="flex items-center m-[10px] justify-center text-[25px] text-gray-300"
						onClick={() => onClick(active)}
					>
						{active ? <RxCross1 /> : <RxHamburgerMenu />}
					</button>
				</div>
				<div
					className={`absolute pointer-events-none left-0 top-[50px] flex flex-col justify-between w-[250px] h-[calc(100%-50px)] overflow-clip transition duration-300 ease-in-out`}
				>
					<section
						className={`fixed w-[50px] bg-shadowGray h-full transition-width duration-300`}
					/>
					<ul>{buildNavLinks(navLinksTop)}</ul>
					<span className="flex flex-col justify-start w-full">
						<span className="z-40 w-[50px] pt-4 pborder-t border-gray-800" />
						<ul className="b-5 ">
							{buildNavLinks(navLinksBottom)}
						</ul>
					</span>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
