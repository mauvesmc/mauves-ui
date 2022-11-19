import { Component, ComponentProps } from "solid-js";

export const IconBallVolleyball: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20" />
    <path d="M12 12a8 8 0 0 0-7.464 4.928M12.951 7.353a12 12 0 0 0-9.88 4.111" />
    <path d="M12 12a8 8 0 0 0-.536-8.928M15.549 15.147a12 12 0 0 0 1.38-10.611" />
  </svg>
);
