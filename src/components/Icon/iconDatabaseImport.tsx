import { Component, ComponentProps } from "solid-js";

export const IconDatabaseImport: Component<ComponentProps<"svg">> = (props) => (
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
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v8m5.009.783c.924.14 1.933.217 2.991.217 4.418 0 8-1.343 8-3V6" />
    <path d="M11.252 20.987c.246.009.496.013.748.013 4.418 0 8-1.343 8-3v-6M2 19h7m-3-3 3 3-3 3" />
  </svg>
);
