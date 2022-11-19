import { Component, ComponentProps } from "solid-js";

export const IconCake: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 20h18v-8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8z" />
    <path d="M2.996 14.803c.312.135.654.204 1.004.197a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1c.35.007.692-.062 1.004-.197M12 4l1.465 1.638a2 2 0 1 1-3.015.099L12 4z" />
  </svg>
);
