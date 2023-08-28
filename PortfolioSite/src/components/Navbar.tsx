import React, { cloneElement } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import type * as CSS from "csstype";

interface NavbarProps {
	title?: string;
	active: boolean;
	projectHierarchyWidth: number;
	icon: React.ReactNode;
}

const Navbar = ({
	title,
	active,
	icon,
	projectHierarchyWidth,
}: NavbarProps) => {
	const widthStyle: () => CSS.Properties = () => {
		return {
			width: active ? `${projectHierarchyWidth}px` : "0px",
		};
	};
	return (
		<div>
			<nav
				className={`fixed top-0 ${
					active ? "pl-0" : "pl-1 xs:pl-4"
				}  left-[50px] z-50 h-[50px] transition-all duration-600 ease-in-out bg-shadowGray`}
				style={{
					width: "calc(100vw - 50px)",
				}}
			>
				<div className={`transition-all duration-300 ease-in-out`}>
					<div className="flex mt-[7px] flex-1 justify-between">
						{/* Black sliding bar on menu open */}
						<div
							className={`fixed top-0 left-[50px] bg-[#293b55] transition-width duration-300 ease-in-out h-[50px] z-40`}
							style={widthStyle()}
						/>
						<a href="/" className={`flex z-50`}>
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
										active ? "" : "sm:inline-block"
									}`}
								>
									{" - "} Developer Portfolio
								</span>
							</span>
						</a>
						{/* Page title */}
						{title && (
							<span className="absolute hidden sm:block -ml-10 xs:-ml-[50px] left-1/2 transform -translate-x-1/2 text-sm xs:text-2xl font-bold text-stone-300">
								{title}
							</span>
						)}
						{/* Social Media Links */}
						<div className=" mt-auto flex items-center justify-between">
							<div className="absolute right-10 top-1/2 h-[50px] w-fit -translate-y-1/2 self-center align-middle flex gap-5 justify-between flex-row items-center">
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
