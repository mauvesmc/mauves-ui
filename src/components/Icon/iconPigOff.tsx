import { Component, ComponentProps } from "solid-js";

export const IconPigOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 11v.01M10 6h1.499l4.5-3L16 6.803A6.019 6.019 0 0 1 18.658 10h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342c-.057.16-.12.318-.19.472M17 17v1.5a1.5 1.5 0 0 1-3 0v-.583A6.04 6.04 0 0 1 13 18H9a6.04 6.04 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027a6 6 0 0 1 1.5-9.928M3 3l18 18" />
  </svg>
);
