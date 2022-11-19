import { Component, ComponentProps } from "solid-js";

export const IconCurrencyRupeeNepalese: Component<ComponentProps<"svg">> = (
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
    <path d="M15 5H4h3a4 4 0 1 1 0 8H4l6 6M21 17l-4.586-4.414a2 2 0 0 0-2.828 2.828l.707.707" />
  </svg>
);
