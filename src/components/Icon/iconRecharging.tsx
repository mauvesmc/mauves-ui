import { Component, ComponentProps } from "solid-js";

export const IconRecharging: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.038 4.5a9 9 0 0 0-2.495 2.47M3.186 10.209a9 9 0 0 0 0 3.508M4.5 16.962a9 9 0 0 0 2.47 2.495M10.209 20.814a9 9 0 0 0 3.5 0M16.962 19.5a9 9 0 0 0 2.495-2.47M20.814 13.791a9 9 0 0 0 0-3.508M19.5 7.038a9 9 0 0 0-2.47-2.495M13.791 3.186a9 9 0 0 0-3.508-.02M12 8l-2 4h4l-2 4" />
    <path d="M12 21a9 9 0 0 0 0-18" />
  </svg>
);
