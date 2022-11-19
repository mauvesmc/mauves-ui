import { Component, ComponentProps } from "solid-js";

export const IconLayersOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.59 4.581C8.952 4.222 9.45 4 10 4h8a2 2 0 0 1 2 2v8c0 .556-.227 1.06-.594 1.422M16 16h-6a2 2 0 0 1-2-2V8" />
    <path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2M3 3l18 18" />
  </svg>
);
