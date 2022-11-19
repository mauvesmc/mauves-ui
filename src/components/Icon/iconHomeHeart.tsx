import { Component, ComponentProps } from "solid-js";

export const IconHomeHeart: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h6" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2c.39 0 .754.112 1.061.304M18.994 21.5l2.518-2.58a1.74 1.74 0 0 0 .004-2.413 1.627 1.627 0 0 0-2.346-.005l-.168.172-.168-.172a1.627 1.627 0 0 0-2.346-.004 1.74 1.74 0 0 0-.004 2.412l2.51 2.59z" />
  </svg>
);
