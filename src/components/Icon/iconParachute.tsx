import { Component, ComponentProps } from "solid-js";

export const IconParachute: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M22 12a10 10 0 1 0-20 0" />
    <path d="M22 12c0-1.66-1.46-3-3.25-3-1.8 0-3.25 1.34-3.25 3 0-1.66-1.57-3-3.5-3s-3.5 1.34-3.5 3c0-1.66-1.46-3-3.25-3C3.45 9 2 10.34 2 12M2 12l10 10-3.5-10M15.5 12 12 22l10-10" />
  </svg>
);
