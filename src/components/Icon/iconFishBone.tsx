import { Component, ComponentProps } from "solid-js";

export const IconFishBone: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16.69 7.44A6.973 6.973 0 0 0 15 12a6.97 6.97 0 0 0 1.699 4.571m0-.004c1.914-.684 3.691-2.183 5.301-4.565-1.613-2.384-3.394-3.883-5.312-4.565M2 9.504a40.73 40.73 0 0 0 2.422 2.504A39.679 39.679 0 0 0 2 14.506M18 11v.01M4.422 12.005H15M7 10v4M11 8v8" />
  </svg>
);
