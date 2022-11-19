import { Component, ComponentProps } from "solid-js";

export const IconHomeHand: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m18 9-6-6-9 9h2v7a2 2 0 0 0 2 2h3.5" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2M16 17.5l-.585-.578a1.516 1.516 0 0 0-2 0c-.477.433-.551 1.112-.177 1.622L15 21c.37.506 1.331 1 2 1h3c1.009 0 1.497-.683 1.622-1.593.252-.938.378-1.74.378-2.407 0-1-.939-1.843-2-2h-1v-2.636C19 12.61 18.328 12 17.5 12s-1.5.61-1.5 1.364V17.5z" />
  </svg>
);
