import { Component, ComponentProps } from "solid-js";

export const IconLampOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 20h6M12 20v-8M7.325 7.35 5 12h7m4 0h3l-4-8H9l-.338.676M3 3l18 18" />
  </svg>
);
