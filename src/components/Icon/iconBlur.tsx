import { Component, ComponentProps } from "solid-js";

export const IconBlur: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 21a9.01 9.01 0 0 0 2.32-.302 9.004 9.004 0 0 0 1.74-16.733A9 9 0 1 0 12 21zM12 3v17M12 12h9M12 9h8M12 6h6M12 18h6M12 15h8" />
  </svg>
);
