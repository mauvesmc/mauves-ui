import { Component, ComponentProps } from "solid-js";

export const IconBrandGraphql: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m5.308 7.265 5.385-3.029M13.308 4.235l5.384 3.03M20 9.5v5M18.693 16.736l-5.385 3.029M10.692 19.765l-5.384-3.03M4 14.5v-5M12.772 4.786l6.121 10.202M18.5 16h-13M5.107 14.988l6.122-10.201" />
    <circle cx="12" cy="3.5" r="1.5" />
    <circle cx="12" cy="20.5" r="1.5" />
    <circle cx="4" cy="8" r="1.5" />
    <circle cx="4" cy="16" r="1.5" />
    <circle cx="20" cy="16" r="1.5" />
    <circle cx="20" cy="8" r="1.5" />
  </svg>
);
