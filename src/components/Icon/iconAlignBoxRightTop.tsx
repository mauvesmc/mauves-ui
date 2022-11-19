import { Component, ComponentProps } from "solid-js";

export const IconAlignBoxRightTop: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M4 18.222V5.778C4 4.796 4.796 4 5.778 4h12.444C19.204 4 20 4.796 20 5.778v12.444c0 .982-.796 1.778-1.778 1.778H5.778A1.778 1.778 0 0 1 4 18.222zM15 13h2M11 10h6M13 7h4" />
  </svg>
);
