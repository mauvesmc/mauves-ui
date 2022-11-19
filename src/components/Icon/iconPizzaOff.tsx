import { Component, ComponentProps } from "solid-js";

export const IconPizzaOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10.313 6.277 12 3l5.34 10.376m2.477 6.463A19.093 19.093 0 0 1 12 21.5c-3.04 0-5.952-.714-8.5-1.983L8.934 8.958" />
    <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56.002 3.105-.24 4.582-.713M11 14v-.01M3 3l18 18" />
  </svg>
);
