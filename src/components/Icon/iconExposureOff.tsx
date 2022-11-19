import { Component, ComponentProps } from "solid-js";

export const IconExposureOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.6 19.4 12 12m2-2 5.4-5.4M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414A1.994 1.994 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.547.22-1.043.576-1.405M7 9h2m0 0v2M13 16h3M3 3l18 18" />
  </svg>
);
