import { Component, ComponentProps } from "solid-js";

export const IconWalletOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 8V5a1 1 0 0 0-1-1H8m-3.413.584A2 2 0 0 0 6 8h2m4 0h6a1 1 0 0 1 1 1v3" />
    <path d="M19 19a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
    <path d="M16 12h4v4m-4 0a2 2 0 0 1-2-2M3 3l18 18" />
  </svg>
);
