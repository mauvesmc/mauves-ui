import { Component, ComponentProps } from "solid-js";

export const IconBallAmericanFootball: Component<ComponentProps<"svg">> = (
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
    <path d="m15 9-6 6M10 12l2 2M12 10l2 2M8 21a5 5 0 0 0-5-5" />
    <path d="M16 3C8.82 3 3 8.82 3 16a5 5 0 0 0 5 5c7.18 0 13-5.82 13-13a5 5 0 0 0-5-5" />
    <path d="M16 3a5 5 0 0 0 5 5" />
  </svg>
);
