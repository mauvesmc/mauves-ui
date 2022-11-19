import { Component, ComponentProps } from "solid-js";

export const IconVectorOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6.68 6.733A.996.996 0 0 1 6 7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 .293-.708" />
    <rect width="4" height="4" x="17" y="3" rx="1" />
    <path d="M20.72 20.693A.997.997 0 0 1 20 21h-2a1 1 0 0 1-1-1v-2c0-.282.116-.536.304-.718" />
    <rect width="4" height="4" x="3" y="17" rx="1" />
    <path d="M5 7v10M19 7v8M9 5h8M7 19h10M3 3l18 18" />
  </svg>
);
