import { Component, ComponentProps } from "solid-js";

export const IconBrandAppleArcade: Component<ComponentProps<"svg">> = (
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
    <circle cx="12" cy="5" r="2" />
    <path d="M20 12.5v4.75a.734.734 0 0 1-.055.325.704.704 0 0 1-.348.366l-5.462 2.58a4.998 4.998 0 0 1-4.27 0l-5.462-2.58a.705.705 0 0 1-.401-.691L4 12.5" />
    <path d="m4.431 12.216 5.634-2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692.692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1-4.27 0l-5.462-2.543a.691.691 0 0 1 .028-1.27zM12 7v6" />
  </svg>
);