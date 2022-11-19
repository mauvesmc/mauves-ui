import { Component, ComponentProps } from "solid-js";

export const IconBeerOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 7v1.111c0 1.242.29 2.467.845 3.578l.31.622A8 8 0 0 1 9 15.889V20h6v-4.111a8 8 0 0 1 .045-.85m.953-3.035.157-.315A7.999 7.999 0 0 0 17 8.111V4H8M7 8h1m4 0h5M3 3l18 18" />
  </svg>
);
