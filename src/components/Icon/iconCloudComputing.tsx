import { Component, ComponentProps } from "solid-js";

export const IconCloudComputing: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6.657 16C4.085 16 2 13.993 2 11.517c0-2.475 2.085-4.482 4.657-4.482.393-1.762 1.794-3.2 3.675-3.773 1.88-.572 3.956-.193 5.444.996 1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486C22 14.44 20.449 16 18.535 16H6.657M12 16v5M16 16v4a1 1 0 0 0 1 1h4M8 16v4a1 1 0 0 1-1 1H3" />
  </svg>
);
