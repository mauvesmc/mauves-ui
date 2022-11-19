import { Component, ComponentProps } from "solid-js";

export const IconCards: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3.604 7.197 7.138-3.109a.96.96 0 0 1 1.27.527l4.924 11.902a1.004 1.004 0 0 1-.514 1.304L9.285 20.93a.96.96 0 0 1-1.271-.527L3.09 8.5a1.005 1.005 0 0 1 .514-1.304zM15 4h1a1 1 0 0 1 1 1v3.5M20 6c.264.112.52.217.768.315a1 1 0 0 1 .53 1.311L19 13" />
  </svg>
);
