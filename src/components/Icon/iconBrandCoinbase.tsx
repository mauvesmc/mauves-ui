import { Component, ComponentProps } from "solid-js";

export const IconBrandCoinbase: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12.95 22c-4.503.001-8.445-3.04-9.61-7.413-1.165-4.373.737-8.988 4.638-11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0-7.354.013 5.252 5.252 0 0 0 0 7.393 5.185 5.185 0 0 0 7.354.013L20 19.088A9.887 9.887 0 0 1 12.95 22z" />
  </svg>
);
