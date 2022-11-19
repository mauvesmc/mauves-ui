import { Component, ComponentProps } from "solid-js";

export const IconMathXPlusX: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m2 9 6 6M2 15l6-6M16 9l6 6M16 15l6-6M10 12h4M12 10v4" />
  </svg>
);
