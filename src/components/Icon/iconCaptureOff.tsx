import { Component, ComponentProps } from "solid-js";

export const IconCaptureOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2c.554 0 1.055-.225 1.417-.589M9.87 9.887a3 3 0 0 0 4.255 4.23m.58-3.416a3.012 3.012 0 0 0-1.4-1.403M4 8V6c0-.548.22-1.044.577-1.405M3 3l18 18" />
  </svg>
);
