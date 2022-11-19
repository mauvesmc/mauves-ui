import { Component, ComponentProps } from "solid-js";

export const IconBoltOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M15.212 15.21 11 21v-7H5l3.79-5.21m1.685-2.32L13 3v6m1 1h5l-2.104 2.893" />
  </svg>
);
