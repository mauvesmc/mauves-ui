import { Component, ComponentProps } from "solid-js";

export const IconLassoPolygon: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.028 13.252 3 10l2-7 7 5 8-3 1 9-9 3-5.144-1.255" />
    <circle cx="5" cy="15" r="2" />
    <path d="M5 17c0 1.42.316 2.805 1 4" />
  </svg>
);
