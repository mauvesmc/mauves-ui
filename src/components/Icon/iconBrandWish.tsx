import { Component, ComponentProps } from "solid-js";

export const IconBrandWish: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m2 6 5.981 2.392-.639 6.037c-.18.893.06 1.819.65 2.514A3 3 0 0 0 10.373 18a4.328 4.328 0 0 0 4.132-3.57c-.18.893.06 1.819.65 2.514A3 3 0 0 0 17.535 18a4.328 4.328 0 0 0 4.132-3.57L22 9.797M14.504 14.429l.334-2.999" />
  </svg>
);
