import { Component, ComponentProps } from "solid-js";

export const IconPig: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 11v.01M16 3v3.803A6.019 6.019 0 0 1 18.658 10h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342a6.008 6.008 0 0 1-1.658 2.473V18.5a1.5 1.5 0 0 1-3 0v-.583a6.04 6.04 0 0 1-1 .083h-4a6.04 6.04 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2L5 16.473A6 6 0 0 1 8.999 6h2.5l4.5-3z" />
  </svg>
);
