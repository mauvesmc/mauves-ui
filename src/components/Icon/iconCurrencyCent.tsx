import { Component, ComponentProps } from "solid-js";

export const IconCurrencyCent: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16.007 7.54A5.965 5.965 0 0 0 11.999 6a5.996 5.996 0 0 0-5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4.004-1.536M12 20v-2M12 6V4" />
  </svg>
);
