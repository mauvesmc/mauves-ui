import { Component, ComponentProps } from "solid-js";

export const IconTrafficLightsOff: Component<ComponentProps<"svg">> = (
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
    <path d="M8 4c.912-1.219 2.36-2 4-2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1-10 0V7" />
    <path d="M12 8a1 1 0 1 0-1-1M11.291 11.295a1 1 0 0 0 1.418 1.41" />
    <circle cx="12" cy="17" r="1" />
    <path d="m3 3 18 18" />
  </svg>
);
