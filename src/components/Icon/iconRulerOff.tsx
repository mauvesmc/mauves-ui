import { Component, ComponentProps } from "solid-js";

export const IconRulerOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4m-3.713.299A.997.997 0 0 0 11 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5c0-.284.118-.54.308-.722M4 8h2M4 12h3M4 16h2M12 4v3M16 4v2M3 3l18 18" />
  </svg>
);
