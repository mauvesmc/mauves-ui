import { Component, ComponentProps } from "solid-js";

export const IconBellOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M17 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 1.279-3.716M9.351 5.35c.209-.127.425-.244.649-.35a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3" />
    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  </svg>
);
