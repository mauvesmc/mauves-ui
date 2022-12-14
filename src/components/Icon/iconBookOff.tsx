import { Component, ComponentProps } from "solid-js";

export const IconBookOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 19a9 9 0 0 1 9 0 8.999 8.999 0 0 1 5.899-1.096M3 6a8.995 8.995 0 0 1 2.114-.884m3.8-.21C9.984 5.076 11.03 5.44 12 6a9 9 0 0 1 9 0M3 6v13M12 6v2m0 4v7M21 6v11M3 3l18 18" />
  </svg>
);
