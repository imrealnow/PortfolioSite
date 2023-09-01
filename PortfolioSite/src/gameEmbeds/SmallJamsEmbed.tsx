const SmallJamsEmbed: () => React.ReactNode = () => {
	const width: () => number = () =>
		Math.max(300, Math.min(900, window.screen.width * 0.8));
	return (
		<iframe
			src="https://itch.io/embed-upload/6095218?color=333333"
			allowFullScreen
			width={width()}
			height={width()}
		>
			<a href="https://imrealnow.itch.io/small-jams">
				Play Small Jams on itch.io
			</a>
		</iframe>
	);
};

export default SmallJamsEmbed;
