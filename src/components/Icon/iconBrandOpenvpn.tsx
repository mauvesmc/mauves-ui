import { Component, ComponentProps } from "solid-js";

export const IconBrandOpenvpn: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m15.618 20.243-2.193-5.602a3 3 0 1 0-2.849 0l-2.193 5.603" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
