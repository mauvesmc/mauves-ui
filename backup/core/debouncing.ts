const debouncing = (
	duration = 500
): {
	debounce: (callback: () => void) => void;
	destroy: () => void;
} => {
	let timeout: NodeJS.Timeout | undefined = undefined;

	const destroy = () => {
		if (timeout) clearTimeout(timeout);
	};

	const debounce = (callback: () => void) => {
		destroy();
		timeout = setTimeout(callback, duration);
	};

	return { debounce, destroy };
};

export default debouncing;
