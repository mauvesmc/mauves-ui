import { Component, ComponentProps } from "solid-js";

export const IconBrandGatsby: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3.296 14.297 6.407 6.407a9.018 9.018 0 0 1-6.325-6.116l-.082-.291zM16 13h5c-.41 3.603-3.007 6.59-6.386 7.614L3.386 9.385A9.004 9.004 0 0 1 19.046 6.4" />
  </svg>
);
