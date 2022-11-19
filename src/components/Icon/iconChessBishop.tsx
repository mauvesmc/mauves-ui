import { Component, ComponentProps } from "solid-js";

export const IconChessBishop: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16H8z" />
    <circle cx="12" cy="4" r="1" />
    <path d="M9.5 16C7.833 16 7 14.331 7 13c0-3.667 1.667-6 5-7 3.333 1 5 3.427 5 7 0 1.284-.775 2.881-2.325 2.994L14.5 16h-5zM15 8l-3 3M12 5v1" />
  </svg>
);
