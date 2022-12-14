import { Component, ComponentProps } from "solid-js";

export const IconRobot: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3l-1-1v-3l1-1V9a2 2 0 0 1 2-2zM10 16h4" />
    <circle cx="8.5" cy="11.5" r=".5" fill="currentColor" />
    <circle cx="15.5" cy="11.5" r=".5" fill="currentColor" />
    <path d="M9 7 8 3M15 7l1-4" />
  </svg>
);
