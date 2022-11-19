import { Component, ComponentProps } from "solid-js";

export const IconHearts: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14.017 18.001 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.153 5.784" />
    <path d="m15.99 20 4.197-4.223a2.81 2.81 0 0 0 .006-3.948 2.747 2.747 0 0 0-3.91-.007l-.28.282-.279-.283a2.747 2.747 0 0 0-3.91-.007 2.81 2.81 0 0 0-.007 3.948L15.989 20z" />
  </svg>
);
