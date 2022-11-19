import { Component, ComponentProps } from "solid-js";

export const IconBallBasketball: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="m5.65 5.65 12.7 12.7M5.65 18.35l12.7-12.7M12 3a9 9 0 0 0 9 9M3 12a9 9 0 0 1 9 9" />
  </svg>
);
