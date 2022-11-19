import { Component, ComponentProps } from "solid-js";

export const IconMoustache: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 9a3 3 0 0 1 2.599 1.5h.001c.933 1.333 2.133 1.556 3.126 1.556l.291-.006.77-.044L22 12c-.963 1.926-3.163 2.925-6.6 2.996L15 15l-.165-.005A3 3 0 0 1 15 9z" />
    <path d="M9 9a3 3 0 0 0-2.599 1.5H6.4c-.933 1.333-2.133 1.556-3.126 1.556l-.291-.006-.77-.044L2 12c.963 1.926 3.163 2.925 6.6 2.996L9 15l.165-.005A3 3 0 0 0 9 9z" />
  </svg>
);
