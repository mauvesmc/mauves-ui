import { Component, ComponentProps } from "solid-js";

export const IconShareOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M15.861 15.896a3 3 0 0 0 4.265 4.22m.578-3.417a3.012 3.012 0 0 0-1.507-1.45M8.7 10.7l1.336-.688M12.66 8.66 15.3 7.3M8.7 13.3l6.6 3.4M3 3l18 18" />
  </svg>
);
