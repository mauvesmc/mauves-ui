import { Component, ComponentProps } from "solid-js";

export const IconRelationManyToMany: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <rect width="18" height="14" x="3" y="5" rx="2" />
    <path d="M15 14v-4l3 4v-4M6 14v-4l3 4v-4M12 10.5v.01M12 13.5v.01" />
  </svg>
);
