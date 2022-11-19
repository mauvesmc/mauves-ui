import { Component, ComponentProps } from "solid-js";

export const IconBrandSass: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M12 10.523c2.46-.826 4.002-.826 4.002-2.155 0-1.366-1.347-1.366-2.735-1.366-1.91 0-3.352.49-4.537 1.748-.848.902-1.027 2.449-.153 3.307.973.956 3.206 1.789 2.884 3.493-.233 1.235-1.469 1.823-2.617 1.202-.782-.424-.454-1.746.626-2.512s2.822-.992 4.1-.24c.98.575 1.046 1.724.434 2.193" />
  </svg>
);
