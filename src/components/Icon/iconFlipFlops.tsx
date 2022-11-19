import { Component, ComponentProps } from "solid-js";

export const IconFlipFlops: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18 4c2.21 0 4 1.682 4 3.758 0 .078-.003.156-.008.234l-.6 9.014C21.282 18.689 19.796 20 18 20s-3.28-1.311-3.392-2.994l-.6-9.014c-.138-2.071 1.538-3.855 3.743-3.985a4.15 4.15 0 0 1 .25-.007z" />
    <path d="M14.5 14c1-3.333 2.167-5 3.5-5 1.333 0 2.5 1.667 3.5 5M18 16v1M6 4c2.21 0 4 1.682 4 3.758 0 .078-.003.156-.008.234l-.6 9.014C9.282 18.689 7.796 20 6 20s-3.28-1.311-3.392-2.994l-.6-9.014C1.87 5.921 3.546 4.137 5.75 4.007 5.834 4.002 5.917 4 6 4z" />
    <path d="M2.5 14c1-3.333 2.167-5 3.5-5 1.333 0 2.5 1.667 3.5 5M6 16v1" />
  </svg>
);
