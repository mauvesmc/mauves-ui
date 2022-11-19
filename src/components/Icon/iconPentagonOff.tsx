import { Component, ComponentProps } from "solid-js";

export const IconPentagonOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.868 4.857 10.804 3.4a2 2 0 0 1 2.397-.006l7.032 5.237a2 2 0 0 1 .7 2.247l-1.522 4.485m-1.027 3.029-.424 1.25A2 2 0 0 1 16.066 21h-8.12a2 2 0 0 1-1.9-1.373L3.15 10.862a2 2 0 0 1 .696-2.225l2.736-2.06M3 3l18 18" />
  </svg>
);
