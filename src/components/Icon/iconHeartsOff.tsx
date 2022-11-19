import { Component, ComponentProps } from "solid-js";

export const IconHeartsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14.017 18.001 12 20l-7.5-7.428a5 5 0 0 1 .49-7.586M8 3.988a5 5 0 0 1 4 2.018 5 5 0 0 1 8.153 5.784" />
    <path d="M11.814 11.814a2.81 2.81 0 0 0-.007 3.948L15.989 20l2.01-2.021m1.977-1.99.211-.212a2.81 2.81 0 0 0 .006-3.948 2.747 2.747 0 0 0-3.91-.007L16 12M3 3l18 18" />
  </svg>
);
