import { Component, ComponentProps } from "solid-js";

export const IconCrutchesOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.178 4.174A2 2 0 0 1 10 3h4a2 2 0 1 1 0 4h-3M11 21h2M12 21v-4.092a3 3 0 0 1 .504-1.664l.992-1.488a3 3 0 0 0 .097-.155M14 10V7M12 21v-4.092a3 3 0 0 0-.504-1.664l-.992-1.488A3 3 0 0 1 10 12.092V10M10 11h1M3 3l18 18" />
  </svg>
);
