import { Component, ComponentProps } from "solid-js";

export const IconBrandPhp: Component<ComponentProps<"svg">> = (props) => (
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
    <ellipse cx="12" cy="12" rx="10" ry="9" />
    <path d="m5.5 15 .395-1.974L6.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H6M15.5 15l.395-1.974L16.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H16M12 7.5 11 13M11.6 10H14l-.5 3" />
  </svg>
);
