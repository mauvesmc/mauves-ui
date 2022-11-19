import { Component, ComponentProps } from "solid-js";

export const IconAlignBoxLeftMiddle: Component<ComponentProps<"svg">> = (
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
    <path d="M20 18.222V5.778C20 4.796 19.204 4 18.222 4H5.778C4.796 4 4 4.796 4 5.778v12.444C4 19.204 4.796 20 5.778 20h12.444c.982 0 1.778-.796 1.778-1.778zM9 15H7M13 12H7M11 9H7" />
  </svg>
);
