import { Component, ComponentProps } from "solid-js";

export const IconPhotoEdit: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 8h.01M11 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
    <path d="m4 15 4-4c.928-.893 2.072-.893 3 0l3 3M14 14l1-1c.31-.298.644-.497.987-.596M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3l3.42-3.39z" />
  </svg>
);
