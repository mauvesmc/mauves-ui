const debouncedState = <T>(
  initialState: T,
  duration: number = 500,
): {
  state: T;
  debounce: (callback: () => void) => void;
  destroy: () => void;
} => {
  let state: T = initialState;
  let timeout: NodeJS.Timeout | undefined = undefined;

  const destroy = () => {
    if (timeout) clearTimeout(timeout);
  };

  const debounce = (callback: () => void) => {
    destroy();
    timeout = setTimeout(callback, duration);
  };

  return { state, debounce, destroy };
};

export default debouncedState;
