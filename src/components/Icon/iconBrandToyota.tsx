import { Component, ComponentProps } from "solid-js";

export const IconBrandToyota: Component<ComponentProps<"svg">> = (props) => (
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
    <ellipse cx="12" cy="12" rx="10" ry="7" />
    <path d="M9 12c0 3.866 1.343 7 3 7s3-3.134 3-7-1.343-7-3-7-3 3.134-3 7z" />
    <path d="M6.415 6.191C5.527 6.694 5 7.321 5 8c0 1.657 3.134 3 7 3s7-1.343 7-3c0-.678-.525-1.304-1.41-1.806" />
  </svg>
);
