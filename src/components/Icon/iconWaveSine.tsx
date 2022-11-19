import { Component, ComponentProps } from "solid-js";

export const IconWaveSine: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M21 12h-2c-.894 0-1.662-.857-1.761-2-.296-3.45-.749-6-2.749-6s-2.5 3.582-2.5 8-.5 8-2.5 8-2.452-2.547-2.749-6c-.1-1.147-.867-2-1.763-2h-2" />
  </svg>
);
