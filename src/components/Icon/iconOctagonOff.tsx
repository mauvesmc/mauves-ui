import { Component, ComponentProps } from "solid-js";

export const IconOctagonOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.647 3.653 8 3.3c.2-.2.4-.3.7-.3h6.6c.3 0 .5.1.7.3L20.7 8c.2.2.3.4.3.7v6.6c0 .3-.1.5-.3.7l-.35.35m-1.997 1.997L16 20.7c-.2.2-.4.3-.7.3H8.7c-.3 0-.5-.1-.7-.3L3.3 16c-.2-.2-.3-.4-.3-.7V8.7c0-.3.1-.5.3-.7l2.35-2.35M3 3l18 18" />
  </svg>
);
