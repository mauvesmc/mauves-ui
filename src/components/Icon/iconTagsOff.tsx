import { Component, ComponentProps } from "solid-js";

export const IconTagsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 6h-.975A2.025 2.025 0 0 0 3 8.025v2.834c0 .537.213 1.052.593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834-2.834c.028-.028.055-.056.08-.085M17.573 18.407l.418-.418m1.997-1.997.419-.419a2.025 2.025 0 0 0 0-2.864L13.29 5.593M6 9h-.01M3 3l18 18" />
  </svg>
);
