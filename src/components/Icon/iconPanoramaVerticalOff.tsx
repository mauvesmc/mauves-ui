import { Component, ComponentProps } from "solid-js";

export const IconPanoramaVerticalOff: Component<ComponentProps<"svg">> = (
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
    <path d="M7 3h10.53c.693 0 1.18.691.935 1.338-1.098 2.898-1.573 5.795-1.425 8.692m.828 4.847c.172.592.37 1.185.595 1.778A1 1 0 0 1 17.529 21h-11c-.692 0-1.208-.692-.962-1.34 1.697-4.486 1.903-8.973.619-13.46M3 3l18 18" />
  </svg>
);