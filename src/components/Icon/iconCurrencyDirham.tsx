import { Component, ComponentProps } from "solid-js";

export const IconCurrencyDirham: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.5 19H5M8.599 16.479A1.5 1.5 0 1 0 7.5 19M7 4v9M15 13h1.888a1.5 1.5 0 0 0 1.296-2.256L16 7M11 13.01V13" />
  </svg>
);
