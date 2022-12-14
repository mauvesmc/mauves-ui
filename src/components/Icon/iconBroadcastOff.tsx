import { Component, ComponentProps } from "solid-js";

export const IconBroadcastOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18.364 19.364A9 9 0 0 0 8.643 4.647M6.155 6.156a9 9 0 0 0-.519 13.208" />
    <path d="M15.536 16.536A5 5 0 0 0 12 8M8.999 9a5 5 0 0 0-.535 7.536M12 12a1 1 0 1 0 1 1M3 3l18 18" />
  </svg>
);
