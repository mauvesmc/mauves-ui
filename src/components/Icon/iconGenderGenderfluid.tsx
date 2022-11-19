import { Component, ComponentProps } from "solid-js";

export const IconGenderGenderfluid: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M10 15.464a4 4 0 1 0 4-6.928 4 4 0 0 0-4 6.928zM15.464 13.999l3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9 3 3M5.5 8.5l3-3M21 21l-6-6M17 20l3-3M3 7V3h4" />
  </svg>
);
