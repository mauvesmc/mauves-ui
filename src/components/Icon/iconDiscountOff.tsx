import { Component, ComponentProps } from "solid-js";

export const IconDiscountOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m9 15 3-3m2-2 1-1M9.148 9.145A.498.498 0 0 0 9.5 10a.5.5 0 0 0 .35-.142M14.148 14.145A.498.498 0 0 0 14.5 15a.5.5 0 0 0 .35-.142" />
    <path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M3 3l18 18" />
  </svg>
);
