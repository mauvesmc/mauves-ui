import { Component, ComponentProps } from "solid-js";

export const IconIroningSteamOff: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464.81 4.865a1 1 0 0 1-.821 1.15M16 16H3a7.001 7.001 0 0 1 6.056-6.937M13 9h6.8M12 19v2M8 19l-1 2M16 19l1 2M3 3l18 18" />
  </svg>
);
