import { Component, ComponentProps } from "solid-js";

export const IconHomeCog: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 21v-6a2 2 0 0 1 2-2h1.6" />
    <path d="M20.001 11.001 12 3l-9 9h2v7a2 2 0 0 0 2 2h4.159" />
    <circle cx="18.001" cy="18" r="2" />
    <path d="M18.001 14.5V16M18.001 20v1.5M21.032 16.25l-1.299.75M16.27 19l-1.3.75M14.97 16.25l1.3.75M19.733 19l1.3.75" />
  </svg>
);
