import { Component, ComponentProps } from "solid-js";

export const IconBabyCarriage: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="8" cy="19" r="2" />
    <circle cx="18" cy="19" r="2" />
    <path d="M2 5h2.5l1.632 4.897A6 6 0 0 0 11.825 14H14.5a5.5 5.5 0 0 0 0-11H14v6M6 9h14M9 17l1-3M16 14l1 3" />
  </svg>
);
