import { Component, ComponentProps } from "solid-js";

export const IconBookmarkOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M17 17v3l-5-3-5 3V7m1.178-2.818c.252-.113.53-.176.822-.176h6a2 2 0 0 1 2 2v7" />
  </svg>
);
