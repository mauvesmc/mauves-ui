import { Component, ComponentProps } from "solid-js";

export const IconCreativeCommonsOff: Component<ComponentProps<"svg">> = (
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
    <path d="M5.638 5.634a9 9 0 1 0 12.723 12.733m1.686-2.332A9 9 0 0 0 7.954 3.958" />
    <path d="M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.928 1.928 0 0 0 0 2.768 2.188 2.188 0 0 0 2.914.116M16.5 10.5a2.194 2.194 0 0 0-2.309-.302M3 3l18 18" />
  </svg>
);
