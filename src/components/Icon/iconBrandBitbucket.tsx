import { Component, ComponentProps } from "solid-js";

export const IconBrandBitbucket: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3.648 4a.64.64 0 0 0-.64.744l3.14 14.528c.07.417.43.724.852.728h10a.644.644 0 0 0 .642-.539l3.35-14.71a.641.641 0 0 0-.64-.744L3.648 4z" />
    <path d="M14 15h-4L9 9h6z" />
  </svg>
);
