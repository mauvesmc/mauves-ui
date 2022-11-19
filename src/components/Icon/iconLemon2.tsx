import { Component, ComponentProps } from "solid-js";

export const IconLemon2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18 4a2 2 0 0 1 1.185 3.611c1.55 2.94.873 6.917-1.892 9.682-2.765 2.765-6.743 3.442-9.682 1.892a2 2 0 1 1-2.796-2.796c-1.55-2.94-.873-6.917 1.892-9.682 2.765-2.765 6.743-3.442 9.682-1.892A1.999 1.999 0 0 1 18 4z" />
  </svg>
);
