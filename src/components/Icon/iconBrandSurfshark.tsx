import { Component, ComponentProps } from "solid-js";

export const IconBrandSurfshark: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19.954 9.447c-.237-6.217 0-6.217-5.996-6.425-5.774-.208-6.824 1.002-7.91 5.382C3.164 20.22 2.203 23.12 10.84 19.602c9.392-3.831 9.297-5.382 9.114-10.155z" />
    <path d="M8 16h.452c1.943.007 3.526-1.461 3.543-3.286v-2.428c.018-1.828 1.607-3.298 3.553-3.286H16" />
  </svg>
);
