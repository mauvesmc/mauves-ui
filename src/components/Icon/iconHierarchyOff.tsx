import { Component, ComponentProps } from "solid-js";

export const IconHierarchyOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <path d="M17.585 17.587a2 2 0 0 0 2.813 2.843M6.5 17.5 12 13l5.5 4.5M12 7v1m0 4v1M3 3l18 18" />
  </svg>
);
