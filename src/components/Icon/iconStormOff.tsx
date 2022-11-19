import { Component, ComponentProps } from "solid-js";

export const IconStormOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.441a3.012 3.012 0 0 0-1.41-1.39" />
    <path d="M7.037 7.063a7 7 0 0 0 9.907 9.892m1.585-2.426A7 7 0 0 0 9.471 5.47" />
    <path d="M5.369 14.236c-1.605-3.428-1.597-6.673-1-9.849M18.63 9.76a14.323 14.323 0 0 1 1.368 6.251m-.37 3.608c-.087.46-.187.92-.295 1.377M3 3l18 18" />
  </svg>
);
