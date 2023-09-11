import {
	DiReact,
	DiNodejsSmall,
	DiGit,
	DiDocker,
	DiLinux,
	DiWindows,
	DiMysql,
} from "react-icons/di";
import { FaJava, FaHtml5 } from "react-icons/fa";
import {
	SiCsharp,
	SiJavascript,
	SiPython,
	SiCss3,
	SiTypescript,
	SiTailwindcss,
	SiUnity,
} from "react-icons/si";
import { Skill, SkillLevel, SkillType, SkillContext } from "../types/Skill";

const skills: Array<Skill> = [
	{
		name: "C#",
		icon: <SiCsharp />,
		level: SkillLevel.Advanced,
		years: "10+",
		type: SkillType.Language,
		contexts: [SkillContext.Personal, SkillContext.Academic],
		description:
			"I have been using C# for over 10 years for my hobby game development projects in Unity. I have used it to create games, tools, and web applications. I have also used it in tandem with ASP.NET and Xamarin to create web and mobile applications (academically). When given the choice (and it is a good fit for the project), C# is my go-to language.",
	},
	{
		name: "JavaScript",
		icon: <SiJavascript />,
		level: SkillLevel.Intermediate,
		years: "5+",
		type: SkillType.Language,
		contexts: [SkillContext.Personal, SkillContext.Academic],
		description:
			"I have used Javascript on and off for many years, starting way back in the days JQuery was still popular. I have picked it up again recently to create this website, and have been using it for both front-end and back-end web development.",
	},
	{
		name: "Python",
		icon: <SiPython />,
		level: SkillLevel.Intermediate,
		years: "5+",
		type: SkillType.Language,
		contexts: [SkillContext.Personal, SkillContext.Academic],
		description:
			"I have used Python for a variety of purposes. I have used it in conjunction with Django to create web applications, and have used it for data analysis and machine learning in both academic and personal projects. It is also my go-to language for quickly prototyping ideas.",
	},
	{
		name: "Java",
		icon: <FaJava />,
		level: SkillLevel.Intermediate,
		years: "5+",
		type: SkillType.Language,
		contexts: [SkillContext.Academic],
		description:
			"Java is the default language for most of my university computer science and software engineering courses. I have used it to create a variety of applications, including web applications, mobile applications, and desktop applications.",
	},
	{
		name: "HTML",
		icon: <FaHtml5 />,
		level: SkillLevel.Intermediate,
		years: "5+",
		type: SkillType.Language,
		contexts: [SkillContext.Personal, SkillContext.Academic],
	},
	{
		name: "CSS",
		icon: <SiCss3 />,
		level: SkillLevel.Intermediate,
		years: "5+",
		type: SkillType.Language,
		contexts: [SkillContext.Personal, SkillContext.Academic],
	},
	{
		name: "TypeScript",
		icon: <SiTypescript />,
		level: SkillLevel.Beginner,
		years: "less than 1 year",
		type: SkillType.Language,
		contexts: [SkillContext.Personal],
		description:
			"I have been using TypeScript for less than a year, but I have been using it extensively for this website. I have used it for both front-end and back-end web development.",
	},
	{
		name: "React",
		icon: <DiReact />,
		level: SkillLevel.Intermediate,
		years: "1+",
		type: SkillType.Framework,
		contexts: [SkillContext.Personal, SkillContext.Academic],
		description:
			"I have used React for a variety of projects, including this website.",
	},
	{
		name: "Node.js",
		icon: <DiNodejsSmall />,
		level: SkillLevel.Intermediate,
		years: "1",
		type: SkillType.Framework,
		contexts: [SkillContext.Personal, SkillContext.Academic],
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss />,
		level: SkillLevel.Beginner,
		years: "less than 1 year",
		type: SkillType.Library,
		contexts: [SkillContext.Personal],
		description:
			"I have been using Tailwind CSS for less than a year, but I have been using it extensively for this website.",
	},
	{
		name: "Git",
		icon: <DiGit />,
		level: SkillLevel.Intermediate,
		years: "5+",
		type: SkillType.Tool,
		contexts: [SkillContext.Personal, SkillContext.Academic],
	},
	{
		name: "Docker",
		icon: <DiDocker />,
		level: SkillLevel.Beginner,
		years: "less than 1 year",
		type: SkillType.Tool,
		contexts: [SkillContext.Academic],
	},
	{
		name: "Linux",
		icon: <DiLinux />,
		level: SkillLevel.Beginner,
		years: "2+",
		type: SkillType.OS,
		contexts: [SkillContext.Personal, SkillContext.Academic],
		description:
			"I used to act a server administrator for a few Minecraft servers a long time ago that all ran on Linux VPMs, and I have Windows Subsystem for Linux (Ubuntu) installed on my computer which I make use of occasionally for using obscure developer tools.",
	},
	{
		name: "Windows",
		icon: <DiWindows />,
		level: SkillLevel.Expert,
		years: "20+",
		type: SkillType.OS,
		contexts: [SkillContext.Personal, SkillContext.Academic],
		description:
			"I have been using Windows for as long as I can remember, and I am very familiar with it. Our first family computer ran Windows 95, and I have used most versions of Windows since then (Windows 2000, Windows XP, Windows 7, Windows 10, Windows 11). I was also the designated tech supporter for my family growing up, so I have a lot of experience troubleshooting Windows issues.",
	},
	{
		name: "MySQL",
		icon: <DiMysql />,
		level: SkillLevel.Beginner,
		years: "1+",
		type: SkillType.Tool,
		contexts: [SkillContext.Academic],
	},
	{
		name: "Unity",
		icon: <SiUnity />,
		level: SkillLevel.Intermediate,
		years: "10+",
		type: SkillType.Tool,
		contexts: [SkillContext.Personal, SkillContext.Academic],
		description:
			"I have been using Unity for over 10 years for my hobby game development projects.\nI have made and released 2 Android games and 2 game jam games using Unity, and I \nhave also developed a code library for Unity that I now use in all of my \nprojects.",
	},
	{
		name: "Critical Thinking",
		type: SkillType.General,
		description:
			"My natural curiosity and desire to understand how things work has led me to \ndevelop strong critical thinking skills. I'm constantly thinking about and \nconsidering things through a variety of different perspectives, and I'm always \nlooking for ways to improve things. I'm also very good at identifying potential \nissues and coming up with solutions to them before they become a problem.",
	},
	{
		name: "Problem Solving",
		type: SkillType.General,
		description:
			"Going all the way back to my time in intermediate school, I was selected to be a \npart of a problem solving group that would compete in competitions. I have also \ndeveloped my problem solving skills through my university studies, and I have \nalso developed them through my experience as a chef. I've found that a perfect \nsolution is usually not feasible. However, I'm very good at conceiving of and \nimplementing solutions that are the best compromises.",
	},
	{
		name: "Team Work",
		type: SkillType.General,
		description:
			"I have worked in a variety of different teams, both in my professional and \nacademic life. I have worked in teams as small as 2 people, and as large as 10 \npeople. As a chef, good teamwork is essential to keep things moving smoothly in \nthe kitchen. During my time as a chef, I have worked in a variety of different \nteams, and I have also been in charge of some teams. Throughout this time, I \nhave developed, improved and refined my set of teamwork-related skills. Skills \nsuch as communication, conflict resolution, mentoring, collaboration, and \nleadership. I have also developed a strong sense of empathy, which I believe is \nessential for good teamwork.",
	},
	{
		name: "Communication",
		type: SkillType.General,
		description:
			"I have developed my communication skills through my experience as a chef. As a \nchef, I have had to communicate with a variety of different people, including \ncustomers, suppliers, and other staff members. As a student, I have also had to \ncommunicate with a variety of different people in different contexts, such as my \nlecturers, tutors and other students. There are many different factors that \ncontribute to effective communication, and I have developed a strong \nunderstanding of these factors through my experience. The most important factors \nare clarity, conciseness, and consideration.",
	},
	{
		name: "Leadership",
		type: SkillType.General,
		description:
			"I have developed my leadership skills through my experience as a chef, as a \nstudent and as a tutor. As a sous chef, I was put in charge of the kitchen team \nand running the kitchen when the head chef was absent. As a student, I have \nacted as a group leader for a few university group projects, offering guidance \nand support to my group members. And as a tutor, I have lead tutorials and labs \nwhere I would teach and assist students with their assignments.",
	},
];

export default skills;
