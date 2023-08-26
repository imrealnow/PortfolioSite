import React from "react";
import { FaFaceSurprise, FaFaceLaughSquint } from "react-icons/fa6";
import { IconType } from "react-icons";

const icons: IconType[] = [FaFaceSurprise, FaFaceLaughSquint];

const RandomFace: React.FC = () => {
	const RandomIcon = icons[Math.floor(Math.random() * icons.length)];
	return <RandomIcon />;
};

export default RandomFace;
