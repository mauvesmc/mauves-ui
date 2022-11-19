import { Component, ComponentProps } from "solid-js";

export const IconTestPipe: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 8.04 7.878 20.164a2.857 2.857 0 1 1-4.041-4.04L15.959 4M7 13h8M19 15l1.5 1.6a2 2 0 1 1-3 0L19 15zM15 3l6 6" />
  </svg>
);
