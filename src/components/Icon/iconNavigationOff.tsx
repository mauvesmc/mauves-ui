import { Component, ComponentProps } from "solid-js";

export const IconNavigationOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16.28 12.28C15.33 10.216 13.903 7.123 12 3c-.7 1.515-1.223 2.652-1.573 3.41m-1.27 2.75c-.882 1.913-2.59 5.618-5.127 11.115-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5l7.265 2.463c.196.077.42.032.57-.116a.548.548 0 0 0 .134-.572l-.26-.563M3 3l18 18" />
  </svg>
);
