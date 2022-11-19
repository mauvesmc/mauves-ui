import { Component, ComponentProps } from "solid-js";

export const IconHeartOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M19.5 12.572 18 14m-2 2-4 4-7.5-7.428m0 0a5 5 0 0 1-1.288-5.068A4.976 4.976 0 0 1 5 5m3-1c1.56.003 3.05.727 4 2.006a5 5 0 1 1 7.5 6.572" />
  </svg>
);
