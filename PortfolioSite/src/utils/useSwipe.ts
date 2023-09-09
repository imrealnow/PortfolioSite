export function useSwipe(
	onSwipeLeft?: any,
	onSwipeRight?: any,
	rangeOffset = 4
) {
	let firstTouch = 0;

	// set user touch start position
	const onTouchStart: React.DragEventHandler = (e) => {
		firstTouch = e.clientX;
	};

	// when touch ends check for swipe directions
	const onTouchEnd: React.DragEventHandler = (e) => {
		// get touch position and screen size
		const positionX = e.clientX;
		const range = window.innerWidth / rangeOffset;

		// check if position is growing positively and has reached specified range
		if (positionX - firstTouch > range) {
			onSwipeRight && onSwipeRight();
		}
		// check if position is growing negatively and has reached specified range
		else if (firstTouch - positionX > range) {
			onSwipeLeft && onSwipeLeft();
		}
	};

	return { onTouchStart, onTouchEnd };
}
