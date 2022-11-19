import { Component, ComponentProps } from "solid-js";

export const IconWashTumbleOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20.116 20.127A2.99 2.99 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.827.335-1.576.877-2.12M7 3h11a3 3 0 0 1 3 3v11" />
    <path d="M17.744 13.74a6 6 0 0 0-7.486-7.482M7.759 7.755a6 6 0 1 0 8.48 8.49M3 3l18 18" />
  </svg>
);
