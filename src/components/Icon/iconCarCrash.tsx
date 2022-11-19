import { Component, ComponentProps } from "solid-js";

export const IconCarCrash: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="10" cy="17" r="2" />
    <path d="m7 6 4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H3m0-6h8m-6 0V6m2 0H3M14 8V6M19 12h2M17.5 15.5 19 17M17.5 8.5 19 7" />
  </svg>
);
