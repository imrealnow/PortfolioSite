import { Tooltip } from "flowbite-react";
import React from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useNavigate, useLocation } from "react-router-dom";
import {
	navLinksBottom,
	navLinksTop,
	NavLink,
} from "../constants/navigationLinks";

interface SidebarProps {
	active: boolean;
	onClick: (active: boolean) => void;
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
						className={`flex items-center gap-4 justify-start focus:bg-transparent w-full h-[50px] pl-[15px] transition-all hover:pl-5 hover:text-stone-200 duration-100 ease-in-out ${
							isLinkCurrent(link)
								? "text-stone-100"
								: "text-stone-500"
						}`}
						onClick={() => {
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
						<span
							className={`text-gray-400 text-[15px] font-poppins w-0 hidden pointer-events-none transition-all whitespace-nowrap duration-200 ease-linear ${
								active ? "sm:block" : "xs:pointer-events-auto"
							}`}
						>
							{link.title}
						</span>
					</span>
				</li>
			);
		});
	};
	return (
		<aside
			id="logo-sidebar"
			className={`fixed flex flex-row top-0 left-0 z-40 h-[100vh] w-[50px]`}
			aria-label="Sidebar"
		>
			<div className="flex w-[50px] h-[50px] justify-start bg-shadowBlack">
				<button
					aria-controls="logo-sidebar"
					type="button"
					className="box-content flex items-center m-[10px] justify-center text-[25px] text-gray-300"
					onClick={() => onClick(active)}
				>
					{active ? <RxCross1 /> : <RxHamburgerMenu />}
				</button>
			</div>
			<div
				className={`absolute pointer-events-none left-0 top-[50px] flex flex-col justify-between w-[250px] h-[calc(100%-50px)] overflow-clip transition duration-300 ease-in-out ${
					active ? "" : "-translate-x-full xs:translate-x-0"
				}`}
			>
				<section
					className={`fixed bg-shadowGray h-full transition-width duration-300 ${
						active ? "w-[50px] xs:w-[250px]" : "w-0 xs:w-[50px]"
					}`}
				/>
				<ul>{buildNavLinks(navLinksTop)}</ul>
				<span className="flex flex-col justify-start w-full">
					<span className="z-40 w-[50px] pt-4 pborder-t border-gray-800" />
					<ul className="b-5 ">{buildNavLinks(navLinksBottom)}</ul>
				</span>
			</div>
		</aside>
	);
};

export default Sidebar;
