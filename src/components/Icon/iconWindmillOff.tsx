import { Component, ComponentProps } from "solid-js";

export const IconWindmillOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15.061 11.06C16.241 10.236 17 8.95 17 7.5 17 5.01 14.76 3 12 3v5M12 12c0 2.76 2.01 5 4.5 5 .166 0 .33-.01.49-.03m2.624-1.36C20.47 14.7 21 13.42 21 12h-5M12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21v-9zM6.981 7.033C4.737 7.318 3 9.435 3 12h9M3 3l18 18" />
  </svg>
);
