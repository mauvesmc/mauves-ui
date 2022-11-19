import { Component, ComponentProps } from "solid-js";

export const IconOm: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 12c2.21 0 4-1.567 4-3.5S9.21 5 7 5c-1.594 0-2.97.816-3.613 1.996M3.423 14.483A4.944 4.944 0 0 0 3 16.5C3 18.985 4.79 21 7 21s4-2.015 4-4.5S9.21 12 7 12" />
    <path d="M14.071 17.01C14.398 19.287 15.81 21 17.5 21c1.933 0 3.5-2.239 3.5-5s-1.567-5-3.5-5c-.96 0-1.868.606-2.5 1.5-.717 1.049-1.76 1.7-2.936 1.7-.92 0-1.766-.406-2.434-1.087M17 3l2 2M12 3c1.667 3.667 4.667 5.333 9 5" />
  </svg>
);
