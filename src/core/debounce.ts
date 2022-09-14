const debounce = (duration: number = 500) => {
  let timeout: NodeJS.Timeout | null = null;

  const destroy = () => {
    if (timeout) clearTimeout(timeout);
  };

  return {
    start: (callback: () => void) => {
      destroy();
      timeout = setTimeout(callback, duration);
    },
    destroy,
  };
};

export default debounce;
