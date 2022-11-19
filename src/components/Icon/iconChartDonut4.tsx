import { Component, ComponentProps } from "solid-js";

export const IconChartDonut4: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.848 14.667 5.5 17.5M12 3v5m4 4h5" />
    <circle cx="12" cy="12" r="9" />
    <path d="M14.219 15.328 17 19.5" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);
