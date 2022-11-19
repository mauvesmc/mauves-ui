import { Component, ComponentProps } from "solid-js";

export const IconBreadOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18.415 18.414A1.994 1.994 0 0 1 17 19H7a2 2 0 0 1-2-2v-6.764a3 3 0 0 1 .435-4.795M9 5h8a3 3 0 0 1 2 5.235V15M3 3l18 18" />
  </svg>
);
