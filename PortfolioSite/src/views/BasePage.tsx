import React from "react";
import { Navbar } from "../components";

interface BaseProps {
	title: string;
	children?: React.ReactNode;
}

const Base = ({ title, children }: BaseProps) => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			<div className="absolute mt-[-7px] bg-primary w-full h-3">
				<Navbar title={title} />
			</div>
			<div className="bg-background h-[calc(100vh-50px)] w-full fixed top-[50px]" />
			<div className="h-[calc(100vh-50px)] w-full absolute top-[50px]">
				{children ?? children}
			</div>
		</div>
	);
};

export default Base;
