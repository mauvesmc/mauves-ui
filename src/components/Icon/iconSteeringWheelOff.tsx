import { Component, ComponentProps } from "solid-js";

export const IconSteeringWheelOff: Component<ComponentProps<"svg">> = (
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
    <path d="M20.04 16.048A9 9 0 0 0 7.957 3.958m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
    <path d="M10.595 10.576a2 2 0 1 0 2.827 2.83M12 14v7M10 12l-6.75-2M15.542 11.543 20.75 10M3 3l18 18" />
  </svg>
);
