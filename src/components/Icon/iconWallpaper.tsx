import { Component, ComponentProps } from "solid-js";

export const IconWallpaper: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6" />
    <circle cx="6" cy="18" r="2" />
    <path d="M8 18V6a2 2 0 1 0-4 0v12" />
  </svg>
);
