import { Component, ComponentProps } from "solid-js";

export const IconSitemapOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19 15a2 2 0 0 1 2 2m-.591 3.42c-.362.358-.86.58-1.409.58h-2a2 2 0 0 1-2-2v-2c0-.549.221-1.046.579-1.407M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2M6 15v-1a2 2 0 0 1 2-2h4m4 0a2 2 0 0 1 2 2M3 3l18 18" />
  </svg>
);
