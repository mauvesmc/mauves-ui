import { Component, ComponentProps } from "solid-js";

export const IconLassoOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-1.804.878-3.449 2.319-4.69m2.49-1.506A11.066 11.066 0 0 1 12 3c4.97 0 9 3.134 9 7 0 1.799-.873 3.44-2.307 4.68m-2.503 1.517A11.066 11.066 0 0 1 12 17c-1.913 0-3.686-.464-5.144-1.255" />
    <circle cx="5" cy="15" r="2" />
    <path d="M5 17c0 1.42.316 2.805 1 4M3 3l18 18" />
  </svg>
);
