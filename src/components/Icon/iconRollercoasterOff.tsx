import { Component, ComponentProps } from "solid-js";

export const IconRollercoasterOff: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.759 8.759 0 0 1 2.35-3.652m2.403-1.589A8.76 8.76 0 0 1 17.325 9H21M20 9v7m0 4v1M8 21v-3M12 21v-9M16 9.5V12m0 4v5M15 3h5v3h-5zM9.446 5.415 10 5l2 2.5-.285.213M9.447 9.415 8 10.5 6.2 10 6 8l1.139-.854M3 3l18 18" />
  </svg>
);
