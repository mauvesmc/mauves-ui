import { Component, ComponentProps } from "solid-js";

export const IconPolygonOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="5" r="2" />
    <circle cx="19" cy="8" r="2" />
    <circle cx="5" cy="11" r="2" />
    <circle cx="15" cy="19" r="2" />
    <path d="m6.5 9.5 1.546-1.311M14 5.5 17 7M18.5 10l-1.185 3.318m-1.062 2.972L16 17M13.5 17.5l-7-5M3 3l18 18" />
  </svg>
);
