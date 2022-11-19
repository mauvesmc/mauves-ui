import { Component, ComponentProps } from "solid-js";

export const IconLivePhoto: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="12" r="5" />
    <path d="M15.9 20.11v.01M19.04 17.61v.01M20.77 14v.01M20.77 10v.01M19.04 6.39v.01M15.9 3.89v.01M12 3v.01M8.1 3.89v.01M4.96 6.39v.01M3.23 10v.01M3.23 14v.01M4.96 17.61v.01M8.1 20.11v.01M12 21v.01" />
  </svg>
);
