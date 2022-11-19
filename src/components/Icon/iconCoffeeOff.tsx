import { Component, ComponentProps } from "solid-js";

export const IconCoffeeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 14c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1 .73-.565 1.783-.923 2.994-.99M8 3c-.194.14-.364.305-.506.49M12 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2" />
    <path d="M14 10h3v3m-.257 3.743A6.003 6.003 0 0 1 11 21H9a6 6 0 0 1-6-6v-5h7" />
    <path d="M20.116 16.124a3 3 0 0 0-3.118-4.953M3 3l18 18" />
  </svg>
);
