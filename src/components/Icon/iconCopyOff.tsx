import { Component, ComponentProps } from "solid-js";

export const IconCopyOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19.414 19.415A1.994 1.994 0 0 1 18 20h-8a2 2 0 0 1-2-2v-8c0-.554.225-1.055.589-1.417M12 8h6a2 2 0 0 1 2 2v6M16 8V6a2 2 0 0 0-2-2H8m-3.418.59C4.222 4.95 4 5.45 4 6v8a2 2 0 0 0 2 2h2M3 3l18 18" />
  </svg>
);
