import { Component, ComponentProps } from "solid-js";

export const IconHeadphonesOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18" />
    <rect width="5" height="7" x="4" y="13" rx="2" />
    <path d="M17 13h1a2 2 0 0 1 2 2v1m-.589 3.417c-.361.36-.86.583-1.411.583h-1a2 2 0 0 1-2-2v-3" />
    <path d="M4 15v-3c0-2.21.896-4.21 2.344-5.658m2.369-1.638A8 8 0 0 1 20 12v3" />
  </svg>
);
