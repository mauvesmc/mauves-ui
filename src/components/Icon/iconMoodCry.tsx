import { Component, ComponentProps } from "solid-js";

export const IconMoodCry: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 10h.01M15 10h.01M9.5 15.25a3.5 3.5 0 0 1 5 0M17.566 17.606a2 2 0 1 0 2.897.03L19 16l-1.434 1.606z" />
    <path d="M20.865 13.517A8.937 8.937 0 0 0 21 12a9 9 0 1 0-9 9c.69 0 1.36-.076 2-.222" />
  </svg>
);
