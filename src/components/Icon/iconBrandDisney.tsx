import { Component, ComponentProps } from "solid-js";

export const IconBrandDisney: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3.22 5.838C1.913 5.688 2 5.26 2 5.044 2 4.828 2.424 4 6.34 4 11.034 4 21 7.645 21 14.042s-8.71 4.931-10.435 4.52C8.841 18.15 5 16.306 5 14.388 5 12.993 8.08 12 11.715 12 15.349 12 17 13.041 17 14c0 .5-.074 1.229-1 1.5" />
    <path d="M10.02 8a505.153 505.153 0 0 0 0 13" />
  </svg>
);
