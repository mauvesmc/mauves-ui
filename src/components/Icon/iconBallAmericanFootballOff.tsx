import { Component, ComponentProps } from "solid-js";

export const IconBallAmericanFootballOff: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="m15 9-1 1m-2.003 2.003L9 15M10 12l2 2M8 21a5 5 0 0 0-5-5" />
    <path d="M6.813 6.802A12.96 12.96 0 0 0 3 16a5 5 0 0 0 5 5 12.96 12.96 0 0 0 9.186-3.801m1.789-2.227A12.94 12.94 0 0 0 21 8a5 5 0 0 0-5-5 12.94 12.94 0 0 0-6.967 2.022" />
    <path d="M16 3a5 5 0 0 0 5 5M3 3l18 18" />
  </svg>
);
