import { Component, ComponentProps } from "solid-js";

export const IconNeedleThread: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21c-.667-.667 3.262-6.236 11.785-16.709a3.5 3.5 0 1 1 5.078 4.791C9.288 17.694 3.667 21.667 3 21zM17.5 6.5l-1 1" />
    <path d="M17 7c-2.333-2.667-3.5-4-5-4s-2 1-2 2c0 4 8.161 8.406 6 11-1.056 1.268-3.363 1.285-5.75.808M5.739 15.425C4.346 14.86 2 13.5 2 12M19.5 9.5 21 11" />
  </svg>
);
