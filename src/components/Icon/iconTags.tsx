import { Component, ComponentProps } from "solid-js";

export const IconTags: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.859 6H5.025A2.025 2.025 0 0 0 3 8.025v2.834c0 .537.213 1.052.593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834-2.834a2.025 2.025 0 0 0 0-2.864L9.29 6.593A2.025 2.025 0 0 0 7.859 6z" />
    <path d="m17.573 18.407 2.834-2.834a2.025 2.025 0 0 0 0-2.864L13.29 5.593M6 9h-.01" />
  </svg>
);
