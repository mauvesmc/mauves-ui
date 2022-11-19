import { Component, ComponentProps } from "solid-js";

export const IconBrushOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 17a4 4 0 1 1 4 4H3v-4z" />
    <path d="M21 3a15.996 15.996 0 0 0-9.309 4.704M9.896 9.916A15.993 15.993 0 0 0 8.2 13.2M21 3a15.996 15.996 0 0 1-4.697 9.302m-2.195 1.786A15.993 15.993 0 0 1 10.8 15.8M3 3l18 18" />
  </svg>
);
