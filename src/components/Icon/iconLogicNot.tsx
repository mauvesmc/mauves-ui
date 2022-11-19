import { Component, ComponentProps } from "solid-js";

export const IconLogicNot: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M22 12h-3M2 9h3M2 15h3M5 5l10 7-10 7z" />
    <circle cx="17" cy="12" r="2" />
  </svg>
);
