import { Component, ComponentProps } from "solid-js";

export const IconContrast2Off: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 18h2a6 6 0 0 0 6-6m.878-3.126A5.996 5.996 0 0 1 18 6h2" />
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414A1.994 1.994 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.547.22-1.043.576-1.405M3 3l18 18" />
  </svg>
);
