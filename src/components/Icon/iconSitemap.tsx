import { Component, ComponentProps } from "solid-js";

export const IconSitemap: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="6" height="6" x="3" y="15" rx="2" />
    <rect width="6" height="6" x="15" y="15" rx="2" />
    <rect width="6" height="6" x="9" y="3" rx="2" />
    <path d="M6 15v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1M12 9v3" />
  </svg>
);
