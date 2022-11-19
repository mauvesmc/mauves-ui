import { Component, ComponentProps } from "solid-js";

export const IconTruckLoading: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" />
    <rect width="10" height="8" x="9" y="6" rx="3" />
    <circle cx="9" cy="19" r="2" />
    <circle cx="18" cy="19" r="2" />
  </svg>
);
