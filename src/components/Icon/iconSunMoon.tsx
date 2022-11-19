import { Component, ComponentProps } from "solid-js";

export const IconSunMoon: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.173 14.83a4 4 0 1 1 5.657-5.657" />
    <path d="m11.294 12.707.174.247a7.5 7.5 0 0 0 8.845 2.492A9 9 0 0 1 5.642 18.36M3 12h1M12 3v1M5.6 5.6l.7.7M3 21 21 3" />
  </svg>
);
