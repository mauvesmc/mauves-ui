import { Component, ComponentProps } from "solid-js";

export const IconBrandHeadlessui: Component<ComponentProps<"svg">> = (
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
    <path d="m6.744 4.325 7.82-1.267a4.456 4.456 0 0 1 5.111 3.686l1.267 7.82a4.456 4.456 0 0 1-3.686 5.111l-7.82 1.267a4.456 4.456 0 0 1-5.111-3.686l-1.267-7.82a4.456 4.456 0 0 1 3.686-5.111z" />
    <path d="m7.252 7.704 7.897-1.28a1 1 0 0 1 1.147.828l.36 2.223-9.562 3.51-.67-4.134a1 1 0 0 1 .828-1.147z" />
  </svg>
);
