import { Component, ComponentProps } from "solid-js";

export const IconTrophyOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 21h8M12 17v4M8 4h9M17 4v8c0 .31-.028.612-.082.905m-1.384 2.632A5 5 0 0 1 7 12V7" />
    <circle cx="5" cy="9" r="2" />
    <circle cx="19" cy="9" r="2" />
    <path d="m3 3 18 18" />
  </svg>
);
