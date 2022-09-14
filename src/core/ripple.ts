const ripple = (
  node: HTMLElement,
  { duration }: { duration: number } = { duration: 300 },
) => {
  const clickHandler = (event: any) => {
    const e = event as MouseEvent & { layerX: number; layerY: number };
    const circle = document.createElement('span');
    const bouning = node.getBoundingClientRect();
    const x = e.x - bouning.left;
    const y = e.y - bouning.top;
    const size = Math.max(node.clientHeight, node.clientWidth) * 1.25;
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

    node.appendChild(circle);

    circle.animate(
      [
        {
          transform: 'translateX(-50%) translateY(-50%) scale(0)',
          opacity: '100%',
        },
        {
          transform: 'translateX(-50%) translateY(-50%) scale(1)',
          opacity: '0%',
        },
      ],
      { duration, iterations: 1, easing: 'ease' },
    );

    setTimeout(() => {
      circle.remove();
    }, duration + 50);
  };

  node.addEventListener('click', clickHandler);

  return {
    destroy() {
      node.removeEventListener('click', clickHandler);
    },
  };
};

export default ripple;
