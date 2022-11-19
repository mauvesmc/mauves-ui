import { Component, ComponentProps } from "solid-js";

export const IconInfinityOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.165 8.174A3.998 3.998 0 0 0 2.999 12a4 4 0 0 0 6.829 2.828A10 10 0 0 0 12 12m1.677-2.347a10 10 0 0 1 .495-.481 4 4 0 1 1 5.129 6.1m-3.521.537a3.994 3.994 0 0 1-1.608-.981A10 10 0 0 1 12 12M3 3l18 18" />
  </svg>
);
