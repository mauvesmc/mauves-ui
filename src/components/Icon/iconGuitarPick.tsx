import { Component, ComponentProps } from "solid-js";

export const IconGuitarPick: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 18.5C18 16 20 12 20 8c0-2.946-2.084-4.157-4.204-4.654C14.932 3.116 13.666 3 12 3c-1.667 0-2.932.115-3.796.346C6.084 3.843 4 5.054 4 8c0 3.312 2 8 4 10.5.297.37.618.731.963 1.081l.354.347a3.9 3.9 0 0 0 5.364 0A14.05 14.05 0 0 0 16 18.5z" />
  </svg>
);
