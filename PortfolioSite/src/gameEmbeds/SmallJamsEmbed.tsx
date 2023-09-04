const SmallJamsEmbed: () => React.ReactNode = () => {
	const width: () => number = () =>
		Math.max(300, Math.min(900, window.screen.width * 0.8));
	return (
		<iframe
			src="https://itch.io/embed-upload/8628447?color=333333"
			allowFullScreen
			width="900"
			height="920"
		>
			<a href="https://imrealnow.itch.io/small-jams">
				Play Small Jams on itch.io
			</a>
		</iframe>
	);
};

export default SmallJamsEmbed;
