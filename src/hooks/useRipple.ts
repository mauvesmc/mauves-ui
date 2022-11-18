import { Accessor, createEffect, createSignal, onCleanup } from "solid-js";
import { useTheme } from "../context/ThemeProvider";
import { getShiftCoordinates } from "../lib/getShiftCoordinates";

const createCircle = (x: number, y: number, size: number, color: string) => {
  const circle = document.createElement("span");
  circle.classList.add("ripple");
  circle.style.borderRadius = "9999px";
  circle.style.position = "absolute";
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.opacity = "100%";
  circle.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
  circle.style.backgroundColor = color;
  circle.style.zIndex = "5";

  return circle;
};

type RippleOptions = {
  duration: number;
  color: string;
  size: number;
  easing: string;
};

type useRippleHook = (
  ref: Accessor<HTMLElement>,
  options?: Partial<RippleOptions>
) => void;

export const useRipple: useRippleHook = (ref, opts = {}) => {
  const theme = useTheme();
  const [options, setOptions] = createSignal({
    duration: 300,
    color: "var(--ripple-color)",
    size: 2,
    easing: theme.motion.standard,
    ...opts,
  });

  createEffect(() =>
    setOptions({
      duration: 300,
      color: "var(--ripple-color)",
      size: 2,
      easing: theme.motion.standard,
      ...opts,
    })
  );

  createEffect(() => {
    if (typeof window === "undefined" || !ref()) {
      return;
    }
    const clickHandler = (e: MouseEvent) => {
      const bounding = ref().getBoundingClientRect();
      const [x, y] = getShiftCoordinates(e, bounding);
      const size = Math.max(bounding.width, bounding.height) * options().size;

      const circle = createCircle(x, y, size, options().color);

      ref().insertBefore(circle, ref().firstChild);

      circle.animate(
        [
          {
            transform: "translateX(-50%) translateY(-50%) scale(0)",
            opacity: "100%",
          },
          {
            transform: "translateX(-50%) translateY(-50%) scale(1)",
            opacity: "0%",
          },
        ],
        {
          duration: options().duration,
          iterations: 1,
          easing: options().easing,
        }
      );

      setTimeout(() => {
        circle.remove();
      }, options().duration);
    };

    ref().removeEventListener("mousedown", clickHandler);
    ref().addEventListener("mousedown", clickHandler);
    onCleanup(() => {
      ref().removeEventListener("mousedown", clickHandler);
    });
  });
};
