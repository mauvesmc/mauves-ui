import { Component, ComponentProps } from "solid-js";

export const IconABOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-4H3M12 12v6M12 6v2M16 8h3a2 2 0 1 1 0 4h-3m3 0a2 2 0 0 1 .83 3.82M16 12V8M3 3l18 18" />
  </svg>
);
