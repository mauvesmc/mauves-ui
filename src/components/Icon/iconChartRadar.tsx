import { Component, ComponentProps } from "solid-js";

export const IconChartRadar: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 3 9.5 7L18 21H6L2.5 10z" />
    <path d="m12 7.5 5.5 4L15 17H8.5l-2-5.5z" />
    <path d="m2.5 10 9.5 3 9.5-3" />
    <path d="M12 3v10l6 8M6 21l6-8" />
  </svg>
);
