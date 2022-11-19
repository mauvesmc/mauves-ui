import { Component, ComponentProps } from "solid-js";

export const IconBikeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="5" cy="18" r="3" />
    <path d="M16.437 16.44a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3M12 19v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3" />
    <circle cx="17" cy="5" r="1" />
    <path d="m3 3 18 18" />
  </svg>
);
