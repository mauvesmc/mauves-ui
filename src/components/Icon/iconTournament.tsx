import { Component, ComponentProps } from "solid-js";

export const IconTournament: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="4" cy="4" r="2" />
    <circle cx="20" cy="10" r="2" />
    <circle cx="4" cy="12" r="2" />
    <circle cx="4" cy="20" r="2" />
    <path d="M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6" />
    <path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2M14 10h4" />
  </svg>
);
