import { Component, ComponentProps } from "solid-js";

export const IconAwardOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16.72 12.704a6 6 0 0 0-8.433-8.418m-1.755 2.24a6 6 0 0 0 7.936 7.944" />
    <path d="m12.002 15.003 3.4 5.89L17 17.66l.707.046m1.108-2.902-1.617-2.8M6.802 12.003l-3.4 5.89L7 17.66l1.598 3.232 3.4-5.889M3 3l18 18" />
  </svg>
);
