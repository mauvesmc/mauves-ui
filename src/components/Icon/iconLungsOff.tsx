import { Component, ComponentProps } from "solid-js";

export const IconLungsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6.583 6.608c-1.206 1.058-2.07 2.626-2.933 5.449-.42 1.37-.636 2.962-.648 4.775-.012 1.675 1.261 3.054 2.877 3.161l.203.007C7.693 20 9 18.665 9 17.02V9M15 11V7.257C15 6.563 15.552 6 16.233 6c.204 0 .405.052.584.15l.13.083c1.46 1.059 2.432 2.647 3.405 5.824.42 1.37.636 2.962.648 4.775 0 .063 0 .125-.004.187m-1.455 2.51c-.417.265-.9.43-1.419.464L17.92 20C16.307 20 15 18.665 15 17.02V15M9 12a2.99 2.99 0 0 0 2.132-.89M12 4v4M3 3l18 18" />
  </svg>
);
