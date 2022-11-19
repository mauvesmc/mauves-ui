import { Component, ComponentProps } from "solid-js";

export const IconDna2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 3v1c-.01 3.352-1.68 6.023-5.008 8.014-3.328 1.99 3.336-2.005.008-.014-3.328 1.99-4.997 4.662-5.008 8.014v1" />
    <path d="M17 21.014v-1c-.01-3.352-1.68-6.023-5.008-8.014-3.328-1.99 3.336 2.005.008.014C8.672 10.023 7.003 7.352 6.992 4V3M7 4h10M7 20h10M8 8h8M8 16h8" />
  </svg>
);
