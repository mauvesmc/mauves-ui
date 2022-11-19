import { Component, ComponentProps } from "solid-js";

export const IconRouterOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362.36-.861.583-1.412.583H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8M17 17v.01M13 17v.01M12.226 8.2a4 4 0 0 1 6.024.55M9.445 5.407A8 8 0 0 1 21.5 6.5M3 3l18 18" />
  </svg>
);
