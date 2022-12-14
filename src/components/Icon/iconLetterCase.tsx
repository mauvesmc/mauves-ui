import { Component, ComponentProps } from "solid-js";

export const IconLetterCase: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="17.5" cy="15.5" r="3.5" />
    <path d="M3 19V8.5a3.5 3.5 0 0 1 7 0V19M3 13h7M21 12v7" />
  </svg>
);
