type RippleOptions = { disabled: boolean; duration: number };

const defaultRippleOptions: RippleOptions = {
	disabled: false,
	duration: 300
};

const ripple = (node: HTMLElement, opts: Partial<RippleOptions> = defaultRippleOptions) => {
	const options = {
		...defaultRippleOptions,
		...opts
	};

	const clickHandler = (event: any) => {
		if (event.currentTarget.disabled) return;
		const e = event as MouseEvent & { layerX: number; layerY: number };
		const circle = document.createElement('span');
		const bouning = node.getBoundingClientRect();
		const x = e.x - bouning.left;
		const y = e.y - bouning.top;
		const size = Math.max(node.clientHeight, node.clientWidth) * 1.25;
		circle.classList.add('ripple');
		circle.style.borderRadius = '9999px';
		circle.style.position = 'absolute';
		circle.style.top = `${y}px`;
		circle.style.left = `${x}px`;
		circle.style.width = `${size}px`;
		circle.style.height = `${size}px`;
		circle.style.opacity = '100%';
		circle.style.transform = 'translateX(-50%) translateY(-50%) scale(0)';
		circle.style.backgroundColor = 'var(--ripple-color)';
		circle.style.zIndex = '5';

		node.insertBefore(circle, node.firstChild);

		circle.animate(
			[
				{
					transform: 'translateX(-50%) translateY(-50%) scale(0)',
					opacity: '50%'
				},
				{
					transform: 'translateX(-50%) translateY(-50%) scale(1)',
					opacity: '0%'
				}
			],
			{ duration: options.duration, iterations: 1, easing: 'ease' }
		);

		setTimeout(() => {
			circle.remove();
		}, options.duration + 50);
	};

	if (!options.disabled) node.addEventListener('click', clickHandler);

	return {
		destroy() {
			if (!options.disabled) node.removeEventListener('click', clickHandler);
		}
	};
};

export default ripple;
