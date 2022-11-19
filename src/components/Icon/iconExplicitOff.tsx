import { Component, ComponentProps } from "solid-js";

export const IconExplicitOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 8h-2m-2 2v6h4" />
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414A1.994 1.994 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.547.22-1.043.576-1.405M12 12h-2M3 3l18 18" />
  </svg>
);
