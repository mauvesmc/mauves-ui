import { Component, ComponentProps } from "solid-js";

export const IconChefHatOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.72 4.712a3.999 3.999 0 0 1 7.19 1.439A4 4 0 0 1 18 13.874V14m0 4v3H6v-7.126a4.002 4.002 0 0 1 .081-7.796M6.161 17.009 17 17M3 3l18 18" />
  </svg>
);
