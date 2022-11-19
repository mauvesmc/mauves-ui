import { Component, ComponentProps } from "solid-js";

export const IconClothesRack: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v14M9 21h6M7.757 9.243a6 6 0 0 0 8.486 0" />
  </svg>
);
