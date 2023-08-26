import React, { useState, cloneElement } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaFaceSmile } from "react-icons/fa6";
import RandomFace from "./RandomFace";
import Sidebar from "./Sidebar";

interface NavbarProps {
	title?: string;
}

const Navbar = ({ title }: NavbarProps) => {
	const [active, setActive] = useState(false);
	const [face, setFace] = useState<React.ReactNode>(<FaFaceSmile />);

	const toggleActive: (active: boolean) => void = (prev) => {
		setActive(!prev);
		setTimeout(() => {
			setFace(RandomFace({}));
		}, 100);
		setTimeout(() => {
			setFace(<FaFaceSmile />);
		}, 1000);
	};

	return (
		<div>
			<nav
				className={`fixed top-0 ${
					active ? "pl-0" : "pl-1 xs:pl-4"
				}  left-[50px] z-50 h-[50px] w-full transition-all duration-600 ease-in-out bg-shadowGray`}
			>
				<div className={`transition-all duration-300 ease-in-out`}>
					<div className="flex mt-[7px] flex-1 justify-between">
						<div
							className={`fixed top-0 left-[50px] bg-shadowBlack transition-width duration-300 ease-in-out h-[50px] z-40 ${
								active ? "w-36 xs:w-[200px]" : "w-0"
							}`}
						></div>
						<a href="/" className={`flex z-50`}>
							{cloneElement(face as React.ReactElement, {
								className: `self-center h-full text-[20px] xs:text-[30px] transition-transform duration-200 ease-in-out text-blue-500 ${
									active ? "rotate-360" : "rotate-[-360]"
								}`,
							})}
							<span
								className={`self-center font-poppins px-2 xs:px-2 whitespace-clip text-gray-200 `}
							>
								<span>Liam Green</span>
								<span
									className={`hidden text-xs text-dimWhite ${
										active ? "" : "sm:inline-block"
									}`}
								>
									{" - "} Developer Portfolio
								</span>
							</span>
						</a>
						{title && (
							<span className="absolute hidden sm:block -ml-10 xs:-ml-[50px] left-1/2 transform -translate-x-1/2 text-sm xs:text-2xl font-bold text-gray-200">
								{title}
							</span>
						)}
						<div className="mr-[55px] mt-auto flex items-center justify-between">
							<div className="h-full self-center align-middle flex gap-5 justify-between flex-row items-center">
								<a href="https://www.linkedin.com/in/liam-green-07b34515b/">
									<AiFillLinkedin className="text-xl sm:text-4xl text-gray-200 hover:text-blue-500 transition-colors duration-200 ease-in-out" />
								</a>
								<a href="https://www.github.com/imrealnow">
									<AiFillGithub className="text-xl sm:text-4xl text-gray-200 hover:text-blue-500 transition-colors duration-200 ease-in-out" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<Sidebar active={active} onClick={toggleActive} />
		</div>
	);
};

export default Navbar;
