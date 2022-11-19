import { Component, ComponentProps } from "solid-js";

export const IconMarqueeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 6c0-.556.227-1.059.593-1.421M9 4h1.5M13.5 4H15M18 4a2 2 0 0 1 2 2M20 9v1.5M20 13.5V15M19.402 19.426A1.993 1.993 0 0 1 18 20M15 20h-1.5M10.5 20H9M6 20a2 2 0 0 1-2-2M4 15v-1.5M4 10.5V9M3 3l18 18" />
  </svg>
);
