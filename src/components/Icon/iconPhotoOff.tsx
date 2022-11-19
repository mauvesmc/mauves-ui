import { Component, ComponentProps } from "solid-js";

export const IconPhotoOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M15 8h.01M19.121 19.122A3 3 0 0 1 17 20H7a3 3 0 0 1-3-3V7c0-.833.34-1.587.888-2.131M8 4h9a3 3 0 0 1 3 3v9" />
    <path d="m4 15 4-4c.928-.893 2.072-.893 3 0l5 5M16.32 12.34c.577-.059 1.162.162 1.68.66l2 2" />
  </svg>
);
