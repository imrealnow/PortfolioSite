import React from "react";
import { Tooltip } from "flowbite-react"; // Assuming Flowbite provides this Tooltip component
import { Skill } from "../types/Skill";

const SkillCard: React.FC<{
	skill: Skill;
	style?: React.CSSProperties;
}> = ({ skill, style }) => {
	const card = () => {
		return (
			<div
				className={`bg-dimBlue min-w-max flex-1 p-4 my-2 rounded-md shadow-md text-sm`}
				style={style}
			>
				<div className="flex justify-between items-center">
					<h4 className="font-bold">{skill.name}</h4>
					{skill.icon && (
						<span className="text-xl">{skill.icon}</span>
					)}
				</div>
				<span className="text-secondary">
					{skill.years && <p>Years: {skill.years}</p>}
					{skill.level && <p>Level: {skill.level}</p>}
					{skill.contexts && <p>{skill.contexts.join(", ")}</p>}
				</span>
			</div>
		);
	};
	return (
		<>
			{skill.description ? (
				<Tooltip
					content={skill.description}
					className="max-w-sm w-full"
				>
					{card()}
				</Tooltip>
			) : (
				card()
			)}
		</>
	);
};

export default SkillCard;
