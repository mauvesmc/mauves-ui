import { Component, ComponentProps } from "solid-js";

export const IconMathOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m14 19 2.5-2.5M18.5 14.5 20 13M3 3l18 18M19 5h-7l-.646 2.262M10.448 10.431 8 19l-3-6H3" />
  </svg>
);
