import { Component, ComponentProps } from "solid-js";

export const IconEyeTable: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.003 18.003h-.011M12.003 18.002h-.011M16.003 18.002h-.011M4 3h16M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3M14 7h-4M9 15h1M14 15h1M12 11V7" />
  </svg>
);
