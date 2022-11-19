import { Component, ComponentProps } from "solid-js";

export const IconAnchorOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 12v9M4 13a8 8 0 0 0 14.138 5.13m1.44-2.56A7.99 7.99 0 0 0 20 13M21 13h-2M5 13H3M12.866 8.873a3.001 3.001 0 1 0-3.737-3.747M3 3l18 18" />
  </svg>
);
