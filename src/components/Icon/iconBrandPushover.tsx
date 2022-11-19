import { Component, ComponentProps } from "solid-js";

export const IconBrandPushover: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6.16 10.985C5.33 9.05 7.69 3 14.355 3 17.688 3 19 4.382 19 6.9c0 2.597-2.612 6.1-9 6.1M12.5 6 7 21" />
  </svg>
);
