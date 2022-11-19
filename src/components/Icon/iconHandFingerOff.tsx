import { Component, ComponentProps } from "solid-js";

export const IconHandFingerOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 13V8M8.06 4.077A1.5 1.5 0 0 1 11 4.5V7m0 4v1M12.063 8.065A1.5 1.5 0 0 1 14 9.5v.5M14.06 10.082A1.5 1.5 0 0 1 17 10.5V12" />
    <path d="M17 11.5a1.5 1.5 0 0 1 3 0V16m-.88 3.129A5.996 5.996 0 0 1 14 22h-2 .208a6 6 0 0 1-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.867 1.867 0 0 1 2.28.28L8 13M3 3l18 18" />
  </svg>
);
