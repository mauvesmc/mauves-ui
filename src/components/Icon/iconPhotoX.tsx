import { Component, ComponentProps } from "solid-js";

export const IconPhotoX: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 8h.01M13 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6" />
    <path d="m4 15 4-4c.928-.893 2.072-.893 3 0l2.5 2.5M21.5 21.5l-5-5M16.5 21.5l5-5" />
  </svg>
);
