import { Component, ComponentProps } from "solid-js";

export const IconMilitaryAward: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="13" r="4" />
    <path d="M8.5 10.5 7.5 8H2l2.48 5.788A2 2 0 0 0 6.32 15H8.5M15.5 10.5l1-2.5H22l-2.48 5.788A2 2 0 0 1 17.68 15H15.5" />
  </svg>
);
