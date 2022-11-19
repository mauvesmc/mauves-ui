import { Component, ComponentProps } from "solid-js";

export const IconToiletPaperOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.27 4.28C3.502 5.55 3 7.639 3 10c0 3.866 1.343 7 3 7s3-3.134 3-7c0-.34-.01-.672-.03-.999M21 10c0-3.866-1.343-7-3-7M7 3h11M21 10v7m-1.513 2.496L18 19l-3 2-3-3-3 2V10M6 10h.01M3 3l18 18" />
  </svg>
);
