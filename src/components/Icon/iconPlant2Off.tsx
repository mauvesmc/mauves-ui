import { Component, ComponentProps } from "solid-js";

export const IconPlant2Off: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M2 9c0 5.523 4.477 10 10 10a9.953 9.953 0 0 0 5.418-1.593m2.137-1.855A9.961 9.961 0 0 0 22 9" />
    <path d="M12 19c0-1.988.58-3.84 1.58-5.397m1.878-2.167A9.961 9.961 0 0 1 22 9M2 9a10 10 0 0 1 10 10M12 4a9.7 9.7 0 0 1 3.002 7.013" />
    <path d="M9.01 11.5a9.696 9.696 0 0 1 .163-2.318m1.082-2.942A9.696 9.696 0 0 1 12 4M3 3l18 18" />
  </svg>
);
