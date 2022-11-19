import { Component, ComponentProps } from "solid-js";

export const IconMeteorOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.75 5.761 13 3l-1 5 9-5-5 9h5l-2.467 2.536m-1.983 2.04-2.441 2.51A6.5 6.5 0 1 1 5.254 9.58l2.322-1.972" />
    <circle cx="9.5" cy="14.5" r="2.5" />
    <path d="m3 3 18 18" />
  </svg>
);
