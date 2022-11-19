import { Component, ComponentProps } from "solid-js";

export const IconBrandGoogleOne: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 4.998V18.98a1.998 1.998 0 0 0 3.995 0V4.998a1.998 1.998 0 1 0-3.995 0z" />
    <path d="M6.63 8.407a2.125 2.125 0 0 0-.074 2.944c.77.834 2.051.869 2.862.077l4.95-4.834c.812-.792.846-2.11.076-2.945a1.984 1.984 0 0 0-2.861-.077L6.63 8.407z" />
  </svg>
);
