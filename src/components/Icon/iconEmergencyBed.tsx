import { Component, ComponentProps } from "solid-js";

export const IconEmergencyBed: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="16" cy="18" r="2" />
    <circle cx="8" cy="18" r="2" />
    <path d="m4 8 2.1 2.8A3 3 0 0 0 8.5 12H20M10 6h4M12 4v4M12 12v2l-2.5 2.5M14.5 16.5 12 14" />
  </svg>
);
