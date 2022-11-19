import { Component, ComponentProps } from "solid-js";

export const IconNetwork: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="9" r="6" />
    <path d="M12 3c1.333.333 2 2.333 2 6s-.667 5.667-2 6M12 3c-1.333.333-2 2.333-2 6s.667 5.667 2 6M6 9h12M3 19h7M14 19h7" />
    <circle cx="12" cy="19" r="2" />
    <path d="M12 15v2" />
  </svg>
);
