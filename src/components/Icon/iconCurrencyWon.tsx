import { Component, ComponentProps } from "solid-js";

export const IconCurrencyWon: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m4 6 3.245 11.358a.85.85 0 0 0 1.624.035L12 8l3.131 9.393a.85.85 0 0 0 1.624-.035L20 6M21 10H3M21 14H3" />
  </svg>
);
