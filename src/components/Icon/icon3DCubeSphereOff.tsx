import { Component, ComponentProps } from "solid-js";

export const Icon3DCubeSphereOff: Component<ComponentProps<"svg">> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 17.6-2-1.1V14M4 10V7.5l2-1.1M10 4.1 12 3l2 1.1M18 6.4l2 1.1V10M20 14v2M14 19.9 12 21l-2-1.1M18 8.6l2-1.1M12 12v2.5M12 18.5V21M12 12l-2-1.12M6 8.6 4 7.5M3 3l18 18" />
  </svg>
);
