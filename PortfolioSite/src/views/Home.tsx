import { useEffect } from "react";
import { openFileItem } from "../atoms/openFileItem";
import { useSetRecoilState } from "recoil";

const Home = () => {
	// Reset open file
	const setOpenFile = useSetRecoilState(openFileItem);
	useEffect(() => {
		setOpenFile(null);
	}, []);

	return (
		<>
			<div className="flex flex-col pl-10 md:pl-20 min-w-md md:max-h-[75vh] md:max-w-[100vw] py-2">
				{/* Header */}
				<section className="flex flex-col justify-start max-w-sm md:max-w-lg">
					<h1 className="text-4xl font-bold text-slate-300">
						Liam Green
					</h1>
					<h2 className="text-2xl font-bold text-slate-500">
						Student of Computer Science
					</h2>
				</section>
				{/* Content box */}
				<section className="flex flex-col md:flex-row pt-4 gap-4 items-start justify-between">
					{/* Left box */}
					<section className="flex flex-col items-start justify-start max-w-xs md:max-w-md">
						<h2 className="text-2xl font-bold">About Me</h2>
						<p className="text-sm">
							Eager to transition from an 8-year culinary journey
							to a fulfilling role in software development, I am
							currently deepening my knowledge with a Bachelor's
							degree in Computer Science, building upon my diploma
							in Software Development. My extensive experience as
							a chef has sharpened my collaborative,
							problem-solving, and critical-thinking skills —
							attributes I believe are vital in creating
							meaningful software solutions.
						</p>
					</section>
					{/* Right box */}
					<section className="flex flex-col items-start justify-start max-w-sm">
						<h2 className="text-2xl font-bold">About This Site</h2>
						<p className="text-sm">
							This site was created using React, Typescript and
							Tailwind CSS. It is hosted on Firebase, and the
							source code is available on my GitHub page.
						</p>
					</section>
				</section>
			</div>
		</>
	);
};

export default Home;
