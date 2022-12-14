import { Component, ComponentProps } from "solid-js";

export const IconBuildingCircus: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 11h16M12 6.5c0 1-5 4.5-8 4.5M12 6.5c0 1 5 4.5 8 4.5M6 11c-.333 5.333-1 8.667-2 10h4c1 0 4-4 4-9v-1M18 11c.333 5.333 1 8.667 2 10h-4c-1 0-4-4-4-9v-1" />
    <path d="M12 7V3l2 1h-2" />
  </svg>
);
