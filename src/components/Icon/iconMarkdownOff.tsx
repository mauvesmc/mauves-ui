import { Component, ComponentProps } from "solid-js";

export const IconMarkdownOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 5h10a2 2 0 0 1 2 2v10M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.85-1.995" />
    <path d="M7 15V9l2 2 .995-.995M11 11v4M17.5 13.5l.5-.5m-2-.997V9M3 3l18 18" />
  </svg>
);
