import { Component, ComponentProps } from "solid-js";

export const IconChessKing: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16H8zM8.5 16a3.5 3.5 0 1 1 3.163-5h.674a3.5 3.5 0 1 1 3.163 5zM9 6h6M12 3v8" />
  </svg>
);
