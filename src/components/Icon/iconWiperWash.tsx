import { Component, ComponentProps } from "solid-js";

export const IconWiperWash: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="20" r="1" />
    <path d="m3 11 5.5 5.5a5 5 0 0 1 7 0L21 11a12 12 0 0 0-18 0M12 20V6M4 6a4 4 0 0 1 .4-1.8M7 2.1a4 4 0 0 1 2 0" />
    <path d="M12 6a4 4 0 0 0-.4-1.8" />
    <path d="M12 6a4 4 0 0 1 .4-1.8M15 2.1a4 4 0 0 1 2 0M20 6a4 4 0 0 0-.4-1.8" />
  </svg>
);
