import { Component, ComponentProps } from "solid-js";

export const IconScubaMaskOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 7h5a1 1 0 0 1 1 1v4.5c0 .154-.014.304-.04.45m-1.997 2.007c-.15.028-.305.043-.463.043H14a2 2 0 0 1-2-2 2 2 0 1 0-4 0 2 2 0 0 1-2 2h-.5A2.5 2.5 0 0 1 3 12.5V8a1 1 0 0 1 1-1h3M10 17a2 2 0 0 0 2 2h3.5a5.475 5.475 0 0 0 2.765-.744m1.996-2c.47-.81.739-1.752.739-2.756V4M3 3l18 18" />
  </svg>
);
