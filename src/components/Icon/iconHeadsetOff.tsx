import { Component, ComponentProps } from "solid-js";

export const IconHeadsetOff: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="4" height="6" x="4" y="13" rx="2" />
    <path d="M17.185 13.173A2 2 0 0 1 20 15v1m-1.18 2.825A2 2 0 0 1 16 17v-1" />
    <path d="M4 15v-3c0-2.208.894-4.207 2.34-5.654m2.377-1.643A8 8 0 0 1 20 12v3M18 19c0 1.657-2.686 3-6 3M3 3l18 18" />
  </svg>
);
