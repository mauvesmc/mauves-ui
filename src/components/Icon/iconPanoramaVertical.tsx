import { Component, ComponentProps } from "solid-js";

export const IconPanoramaVertical: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M18.463 4.338c-1.932 5.106-1.932 10.211 0 15.317A1 1 0 0 1 17.529 21h-11c-.692 0-1.208-.692-.962-1.34 1.932-5.107 1.932-10.214 0-15.321C5.321 3.691 5.81 3 6.502 3H17.53c.693 0 1.18.691.935 1.338z" />
  </svg>
);
