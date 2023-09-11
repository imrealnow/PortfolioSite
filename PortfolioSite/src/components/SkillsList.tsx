import skills from "../constants/skills";
import SkillCard from "./SkillCard";
import { Skill, SkillType } from "../types/Skill";

const SkillsList = () => {
	// Grouping skills by type
	const groupedSkills = skills.reduce<Record<SkillType, Array<Skill>>>(
		(acc, skill) => {
			if (!acc[skill.type]) acc[skill.type] = [];
			acc[skill.type].push(skill);
			return acc;
		},
		{} as Record<SkillType, Array<Skill>>
	);

	const cardColors: Map<SkillType, string> = new Map<SkillType, string>();
	cardColors.set(SkillType.Language, "#637282");
	cardColors.set(SkillType.Framework, "#656382");
	cardColors.set(SkillType.Library, "#7b6382");
	cardColors.set(SkillType.Tool, "#82636f");
	cardColors.set(SkillType.OS, "#827963");
	cardColors.set(SkillType.General, "#6c8263");

	return (
		<div className="flex flex-row gap-5 justify-between p-8">
			{Object.entries(groupedSkills).map(([type, skillsList]) => (
				<div key={type}>
					<h3 className="text-xl font-semibold">{type}</h3>
					<hr className="border-gray-400 mb-4 border-2" />
					<div className="flex flex-col min-w-full">
						{skillsList.map((skill) => (
							<SkillCard
								key={skill.name}
								skill={skill}
								style={{
									backgroundColor: cardColors.get(skill.type),
								}}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default SkillsList;
