import { Component, ComponentProps } from "solid-js";

export const IconMoodBoy: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 4.5a9 9 0 0 1 3.864 5.89 2.5 2.5 0 0 1-.29 4.36 9 9 0 0 1-17.137 0 2.5 2.5 0 0 1-.29-4.36 9 9 0 0 1 3.746-5.81" />
    <path d="M9.5 16a3.5 3.5 0 0 0 5 0M8.5 2C10 3 11 5.5 11 7M12.5 2c1.5 2 2 3.5 2 5M9 12h.01M15 12h.01" />
  </svg>
);
