import { Component, ComponentProps } from "solid-js";

export const IconLanguageKatakana: Component<ComponentProps<"svg">> = (
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
    <path d="M5 5h6.586a1 1 0 0 1 .707 1.707L11 8M8 8c0 1.5.5 3-2 5M12 20l4-9 4 9M19.1 18h-6.2" />
  </svg>
);
