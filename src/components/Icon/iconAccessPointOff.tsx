import { Component, ComponentProps } from "solid-js";

export const IconAccessPointOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M14.828 9.172A4 4 0 0 1 16 12M17.657 6.343a8 8 0 0 1 1.635 8.952M9.168 14.828a4 4 0 0 1 0-5.656M6.337 17.657a8 8 0 0 1 0-11.314" />
  </svg>
);
