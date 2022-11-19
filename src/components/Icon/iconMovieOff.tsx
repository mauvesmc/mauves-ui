import { Component, ComponentProps } from "solid-js";

export const IconMovieOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362.359-.859.58-1.408.58H6a2 2 0 0 1-2-2V6c0-.539.213-1.028.56-1.388M8 8v12M16 4v8m0 4v4M4 8h4M4 16h4M4 12h8m4 0h4M16 8h4M3 3l18 18" />
  </svg>
);
