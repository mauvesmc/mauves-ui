import { Component, ComponentProps } from "solid-js";

export const IconMoonOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.962 3.949A8.97 8.97 0 0 1 12 2.992V3h.393a7.478 7.478 0 0 0-2.07 3.308m-.141 3.84c.186.823.514 1.626.989 2.373a7.49 7.49 0 0 0 4.586 3.268m3.893-.11c.223-.067.444-.144.663-.233a9.088 9.088 0 0 1-.274.597m-1.695 2.337A9 9 0 0 1 5.634 5.631M3 3l18 18" />
  </svg>
);
