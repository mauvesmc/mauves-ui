import { Component, ComponentProps } from "solid-js";

export const IconMusicOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="17" r="3" />
    <path d="M14.42 14.45a3 3 0 1 0 4.138 4.119M9 17V9m0-4V4h10v11M12 8h7M3 3l18 18" />
  </svg>
);
