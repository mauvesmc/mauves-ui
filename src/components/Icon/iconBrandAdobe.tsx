import { Component, ComponentProps } from "solid-js";

export const IconBrandAdobe: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12.893 4.514 7.977 13.994a.993.993 0 0 1-.394 1.365 1.04 1.04 0 0 1-.5.127H16.5L12 12l-2.5 4H11l2 4H4.023C3.458 20 3 19.55 3 18.997c0-.171.045-.34.13-.49l7.977-13.993a1.034 1.034 0 0 1 1.786 0z" />
  </svg>
);
