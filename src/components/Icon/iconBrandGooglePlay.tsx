import { Component, ComponentProps } from "solid-js";

export const IconBrandGooglePlay: Component<ComponentProps<"svg">> = (
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
    <path d="M4 3.71v16.58a.7.7 0 0 0 1.05.606l14.622-8.42a.55.55 0 0 0 0-.953L5.05 3.104A.7.7 0 0 0 4 3.711zM15 9 4.5 20.5M4.5 3.5 15 15" />
  </svg>
);
