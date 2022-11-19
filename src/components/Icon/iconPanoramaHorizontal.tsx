import { Component, ComponentProps } from "solid-js";

export const IconPanoramaHorizontal: Component<ComponentProps<"svg">> = (
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
    <path d="M4.338 5.53c5.106 1.932 10.211 1.932 15.317.002A1 1 0 0 1 21 6.466v11c0 .692-.692 1.2-1.34.962-5.107-1.932-10.214-1.932-15.321 0A.993.993 0 0 1 3 17.493V6.466a1 1 0 0 1 1.338-.935z" />
  </svg>
);
