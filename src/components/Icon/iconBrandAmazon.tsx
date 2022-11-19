import { Component, ComponentProps } from "solid-js";

export const IconBrandAmazon: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 12.5a15.198 15.198 0 0 1-7.37 1.44A14.62 14.62 0 0 1 3 11M19.5 15c.907-1.411 1.451-3.323 1.5-5-1.197-.773-2.577-.935-4-1" />
  </svg>
);
