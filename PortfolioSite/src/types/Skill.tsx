enum SkillContext {
	Academic = "Academic",
	Professional = "Professional",
	Personal = "Personal",
}

enum SkillType {
	Language = "Language",
	Framework = "Framework",
	Library = "Library",
	Tool = "Tool",
	OS = "OS",
	General = "General",
}

enum SkillLevel {
	Beginner = "Beginner",
	Intermediate = "Intermediate",
	Advanced = "Advanced",
	Expert = "Expert",
}

interface Skill {
	name: string;
	type: SkillType;
	years?: string;
	level?: SkillLevel;
	description?: string;
	icon?: React.ReactNode;
	contexts?: Array<SkillContext>;
}

export { SkillContext, SkillType, SkillLevel };

export type { Skill };
