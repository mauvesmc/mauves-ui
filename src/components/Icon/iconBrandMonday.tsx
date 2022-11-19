import { Component, ComponentProps } from "solid-js";

export const IconBrandMonday: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="19.5" cy="15.5" r="1.5" />
    <path d="M9.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 9.5 7zM16.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 16.5 7z" />
  </svg>
);
