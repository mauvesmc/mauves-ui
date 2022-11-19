import { Component, ComponentProps } from "solid-js";

export const IconBrandZoom: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17.011 9.385v5.128L21 18V6zM3.887 6h10.08C15.435 6 17 7.203 17 8.803v8.196A.991.991 0 0 1 16.025 18H5.652C3.985 18 3 16.5 3 15l.01-8.002a.882.882 0 0 1 .208-.71.841.841 0 0 1 .67-.287z" />
  </svg>
);
