import { Component, ComponentProps } from "solid-js";

export const IconCrutches: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="8" height="4" x="8" y="3" rx="2" />
    <path d="M11 21h2M12 21v-4.092a3 3 0 0 1 .504-1.664l.992-1.488A3 3 0 0 0 14 12.092V7M12 21v-4.092a3 3 0 0 0-.504-1.664l-.992-1.488A3 3 0 0 1 10 12.092V7M10 11h4" />
  </svg>
);
