import { Component, ComponentProps } from "solid-js";

export const IconBrandFlutter: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m7 14-3-3 8-8h6zM14 21l-5-5 5-5h5l-5 5 5 5z" />
  </svg>
);
