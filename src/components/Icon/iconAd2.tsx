import { Component, ComponentProps } from "solid-js";

export const IconAd2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11.933 5H5v16h13v-8M14 17H9" />
    <path d="M9 13h5V9H9zM15 5V3M18 6l2-2M19 9h2" />
  </svg>
);
