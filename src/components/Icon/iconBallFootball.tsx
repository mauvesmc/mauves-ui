import { Component, ComponentProps } from "solid-js";

export const IconBallFootball: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="m12 7 4.76 3.45L15 16H9l-1.76-5.55zM12 7V3m3 13 2.5 3m-.74-8.55L20.5 9M9.06 16.05 6.5 19m.74-8.55L3.5 9" />
  </svg>
);
