import { Component, ComponentProps } from "solid-js";

export const IconFireHydrantOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 21h14M17 21v-4m2-2v-2a1 1 0 0 0-1-1h-1V8a5 5 0 0 0-8.533-3.538M7.08 7.1A5.03 5.03 0 0 0 7 8v4H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v5M12 12a2 2 0 1 0 2 2M6 8h2m4 0h6M3 3l18 18" />
  </svg>
);
