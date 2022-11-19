import { Component, ComponentProps } from "solid-js";

export const IconBrandSketch: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3.262 10.878 8 8.789c.4.44 1.091.44 1.491 0l8-8.79c.313-.344.349-.859.087-1.243L17.303 4.44a1 1 0 0 0-.823-.436H7.554a1 1 0 0 0-.823.436l-3.54 5.192c-.263.385-.227.901.087 1.246z" />
  </svg>
);
