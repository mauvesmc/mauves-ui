import { Component, ComponentProps } from "solid-js";

export const IconCameraOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.29 4.296A1 1 0 0 1 9 4h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.179 2.824c-.25.113-.528.176-.821.176H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1c.292 0 .568-.062.818-.175" />
    <path d="M10.436 10.44a3 3 0 1 0 4.126 4.122M3 3l18 18" />
  </svg>
);
