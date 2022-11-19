import { Component, ComponentProps } from "solid-js";

export const IconBrandZapier: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 12h6M21 12h-6M12 3v6M12 15v6M5.636 5.636l4.243 4.243M18.364 18.364l-4.243-4.243M18.364 5.636l-4.243 4.243M9.879 14.121l-4.243 4.243" />
  </svg>
);
