import { Component, ComponentProps } from "solid-js";

export const IconPingPong: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12.718 20.713a7.64 7.64 0 0 1-7.48-12.755l.72-.72a7.643 7.643 0 0 1 9.105-1.283L17.45 3.61a2.08 2.08 0 0 1 3.057 2.815l-.116.126-2.346 2.387a7.644 7.644 0 0 1-1.052 8.864" />
    <circle cx="14" cy="18" r="3" />
    <path d="m9.3 5.3 9.4 9.4" />
  </svg>
);
