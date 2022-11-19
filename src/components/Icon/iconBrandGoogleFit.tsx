import { Component, ComponentProps } from "solid-js";

export const IconBrandGoogleFit: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 9.314 9.657 6.97a3.314 3.314 0 0 0-4.686 4.686L7.314 14 12 18.686l7.03-7.03a3.314 3.314 0 0 0-4.687-4.685L7.313 14" />
  </svg>
);
