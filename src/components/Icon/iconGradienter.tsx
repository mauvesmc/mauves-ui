import { Component, ComponentProps } from "solid-js";

export const IconGradienter: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3.227 14c.917 3.999 4.497 7 8.773 7 4.277 0 7.858-3 8.773-7M20.78 10A8.994 8.994 0 0 0 12 3a8.985 8.985 0 0 0-8.782 7" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
