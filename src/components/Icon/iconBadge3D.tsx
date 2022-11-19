import { Component, ComponentProps } from "solid-js";

export const IconBadge3D: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="14" x="3" y="5" rx="2" />
    <path d="M7 9.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H8h.5a1.5 1.5 0 0 1 0 3h-1a.5.5 0 0 1-.5-.5M14 9v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1z" />
  </svg>
);
