import React, { useState, useEffect } from "react";
import { marked } from "marked";
interface ReadmeProps {
	path: string;
}

const Readme: React.FC<ReadmeProps> = ({ path }) => {
	const [markdown, setMarkdown] = useState<string | null>(null);

	useEffect(() => {
		if (!path || path === "") {
			return;
		}
		fetch(path)
			.then((response) => response.text())
			.then((text) => {
				return marked(text, { async: true });
			})
			.then((html) => {
				setMarkdown(html);
			});
	}, [path]);

	return (
		<article
			className="absolute prose max-w-6xl min-w-[100vw-350px] prose-invert overflow-y-scroll scrollbar-thin max-h-[90vh] px-10 pt-5 "
			dangerouslySetInnerHTML={{ __html: markdown || "" }}
		/>
	);
};

export default Readme;
