import { Component, ComponentProps } from "solid-js";

export const IconVaccineOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m17 3 4 4M19 5l-4.5 4.5M11.5 6.5l6 6M16.5 11.5l-.5.5m-2 2-4 4H6v-4l4-4m2-2 .5-.5M7.5 12.5 9 14M3 21l3-3M3 3l18 18" />
  </svg>
);
