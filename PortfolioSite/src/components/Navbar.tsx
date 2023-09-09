import React, { cloneElement } from "react";
import { useRecoilValue } from "recoil";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FileItem } from "../types/Project";
import { openFileItem } from "../atoms/openFileItem";

interface NavbarProps {
	active: boolean;
	slidingBarRef: React.RefObject<HTMLDivElement>;
	icon: React.ReactNode;
}

const Navbar = ({ active, icon, slidingBarRef }: NavbarProps) => {
	const currentFile: FileItem<any> | null =
		useRecoilValue<FileItem<any> | null>(openFileItem);
	return (
		<div>
			<nav
				className={`fixed top-0 ${
					active ? "pl-1" : "pl-2 xs:pl-4"
				}  ml-[50px] left-0 z-50 h-[50px] transition-all duration-600 ease-in-out bg-shadowGray`}
				style={{
					width: "100vw",
				}}
			>
				<div className={`transition-all duration-300 ease-in-out`}>
					<div className="flex flex-1 justify-between">
						{/* Black sliding bar on menu open */}
						<div
							className={`fixed top-0 w-0 left-[50px] bg-[#293b55] h-[50px] duration-300 z-40`}
							ref={slidingBarRef}
							style={{
								transitionProperty: "width",
								transitionTimingFunction: "ease-in-out",
							}}
						/>
						<a
							href="/"
							className={`relative flex z-50 h-[50px] -top-1/2 -translate-y-0`}
						>
							{/* Icon */}
							{cloneElement(icon as React.ReactElement, {
								className: `self-center h-full text-[20px] xs:text-[30px] transition-transform duration-200 ease-in-out text-blue-500 ${
									active ? "rotate-360" : "rotate-[-360]"
								}`,
							})}
							<span
								className={`self-center font-poppins px-2 xs:px-2 whitespace-clip `}
							>
								<span className="text-stone-300">
									Liam Green
								</span>
								<span
									className={`hidden text-xs text-stone-500 ${
										active ? "" : "md:inline-block"
									}`}
								>
									{" - "} Developer Portfolio
								</span>
							</span>
						</a>
						{/* Page title */}
						{currentFile && (
							<span className="absolute hidden sm:block -ml-10 xs:-ml-[50px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-sm xs:text-2xl font-bold text-stone-300">
								{currentFile.parentFolder
									? currentFile.parentFolder.name + "/"
									: ""}
								{currentFile.name + currentFile.contentType}
							</span>
						)}
						{/* Social Media Links */}
						<div className=" mt-auto flex items-center justify-between">
							<div className="absolute right-20 top-1/2 h-[50px] w-fit -translate-y-1/2 self-center align-middle flex gap-5 justify-between flex-row items-center">
								<a href="https://www.linkedin.com/in/liam-green-07b34515b/">
									<AiFillLinkedin className="text-2xl sm:text-4xl text-stone-400 hover:text-blue-500 transition-colors duration-200 ease-in-out" />
								</a>
								<a href="https://www.github.com/imrealnow">
									<AiFillGithub className="text-2xl sm:text-4xl text-stone-400 hover:text-blue-500 transition-colors duration-200 ease-in-out" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
