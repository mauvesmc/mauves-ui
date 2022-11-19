import { Component, ComponentProps } from "solid-js";

export const IconCricket: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m11.105 18.79-1.006.992a4.159 4.159 0 0 1-6.038-5.715l.157-.166L12.5 5.5 14 7l3.45-3.391a2.08 2.08 0 0 1 3.057 2.815l-.116.126L17 10l1.5 1.5-3.668 3.617M10.5 7.5l6 6" />
    <circle cx="14" cy="18" r="3" />
  </svg>
);
