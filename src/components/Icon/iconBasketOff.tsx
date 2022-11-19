import { Component, ComponentProps } from "solid-js";

export const IconBasketOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m7 10 1.359-1.63M10.176 6.188 12 4l5 6M18.77 18.757c-.358.768-1.027 1.262-1.77 1.243H7c-.966.024-1.807-.817-2-2l-2-8h7" />
    <path d="M14 10h7l-1.397 5.587" />
    <circle cx="12" cy="15" r="2" />
    <path d="m3 3 18 18" />
  </svg>
);
