import { Component, ComponentProps } from "solid-js";

export const IconWifi: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 18h.01M9.172 15.172a4 4 0 0 1 5.656 0M6.343 12.343a8 8 0 0 1 11.314 0" />
    <path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0" />
  </svg>
);
