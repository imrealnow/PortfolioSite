const Home = () => {
	return (
		<>
			<main className="h-full w-full">
				<div className="container mx-auto flex flex-col pl-10 md:pl-20 min-w-max md:max-h-[75vh] md:max-w-[75vw] justify-center py-2">
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
						<section className="flex flex-col items-start justify-start max-w-sm md:max-w-md">
							<h2 className="text-2xl font-bold">About Me</h2>
							<p className="text-sm">
								I am a software developer who is passionate
								about creating games, libraries, and web
								applications. I am currently a student at
								Victoria University of Wellington studying a
								Bachelor of Science in Computer Science, and I'm
								looking for any opportunities where I'm able to
								bring my diverse skillset to the table.
							</p>
							<h2 className="text-2xl font-bold pt-8">
								Contact Me
							</h2>
							<form>
								<label className="text-sm">Email Address</label>
								<input
									type="text"
									className="border-1 border-slate-900 bg-slate-700 rounded-md w-full"
								/>
								<label className="text-sm pt-2">Message</label>
								<textarea
									className="resize-none border-1 border-slate-900 bg-slate-700 rounded-md w-full"
									rows={5}
								/>
								<button
									type="submit"
									className="border-1 border-slate-900 bg-slate-700 rounded-md w-full mt-2"
								>
									Send
								</button>
							</form>
						</section>
						{/* Right box */}
						<section className="flex flex-col items-start justify-start max-w-sm">
							<h2 className="text-2xl font-bold">
								About This Site
							</h2>
							<p className="text-sm">
								This site was created using React, Typescript
								and Tailwind CSS. It is hosted on Firebase, and
								the source code is available on my GitHub page.
							</p>
						</section>
					</section>
				</div>
			</main>
		</>
	);
};

export default Home;
