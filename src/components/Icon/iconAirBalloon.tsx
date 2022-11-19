import { Component, ComponentProps } from "solid-js";

export const IconAirBalloon: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="4" height="3" x="10" y="19" rx="1" />
    <path d="M12 16c3.314 0 6-4.686 6-8A6 6 0 1 0 6 8c0 3.314 2.686 8 6 8z" />
    <ellipse cx="12" cy="9" rx="2" ry="7" />
  </svg>
);
