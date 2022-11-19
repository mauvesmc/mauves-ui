import { Component, ComponentProps } from "solid-js";

export const IconPaletteOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 15h-1a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21 9 9 0 0 1 5.628 5.644M8 4c1.236-.623 2.569-1 4-1 4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828a4.516 4.516 0 0 1-1.127.73" />
    <circle cx="8.5" cy="10.5" r="1" />
    <circle cx="12.5" cy="7.5" r="1" />
    <circle cx="16.5" cy="10.5" r="1" />
    <path d="m3 3 18 18" />
  </svg>
);
