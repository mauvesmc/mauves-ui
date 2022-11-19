import { Component, ComponentProps } from "solid-js";

export const IconDroneOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 14h-4v-4M10 10 6.5 6.5M9.957 5.95A3.503 3.503 0 0 0 7.04 3.04m-3.02.989A3.5 3.5 0 0 0 6 9.965M14 10l3.5-3.5M18 9.965A3.5 3.5 0 1 0 14.034 6M14 14l3.5 3.5M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987-3.026a3.503 3.503 0 0 0-2.918-2.913M10 14l-3.5 3.5M6 14.035A3.5 3.5 0 1 0 9.966 18M3 3l18 18" />
  </svg>
);
