import { Component, ComponentProps } from "solid-js";

export const IconDeer: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 3c0 2 1 3 4 3 2 0 3 1 3 3M21 3c0 2-1 3-4 3-2 0-3 .333-3 3M12 18c-1 0-4-3-4-6 0-2 1.333-3 4-3s4 1 4 3c0 3-3 6-4 6" />
    <path d="m15.185 14.889.095-.18a4 4 0 1 1-6.56 0M17 3c0 1.333-.333 2.333-1 3M7 3c0 1.333.333 2.333 1 3M7 6c-2.667.667-4.333 1.667-5 3M17 6c2.667.667 4.333 1.667 5 3M8.5 10 7 9M15.5 10 17 9M12 15h.01" />
  </svg>
);
