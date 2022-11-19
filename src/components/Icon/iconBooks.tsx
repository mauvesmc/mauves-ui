import { Component, ComponentProps } from "solid-js";

export const IconBooks: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="4" height="16" x="5" y="4" rx="1" />
    <rect width="4" height="16" x="9" y="4" rx="1" />
    <path d="M5 8h4M9 16h4M13.803 4.56l2.184-.53c.562-.135 1.133.19 1.282.732l3.695 13.418a1.02 1.02 0 0 1-.634 1.219l-.133.041-2.184.53c-.562.135-1.133-.19-1.282-.732L13.036 5.82a1.02 1.02 0 0 1 .634-1.219l.133-.041zM14 9l4-1M16 16l3.923-.98" />
  </svg>
);
