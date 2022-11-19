import { Component, ComponentProps } from "solid-js";

export const IconSkull: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 4c4.418 0 8 3.358 8 7.5 0 1.901-.755 3.637-1.999 4.96L18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.54c-1.245-1.322-2-3.058-2-4.96C4 7.358 7.582 4 12 4zM10 17v3M14 17v3" />
    <circle cx="9" cy="11" r="1" />
    <circle cx="15" cy="11" r="1" />
  </svg>
);
