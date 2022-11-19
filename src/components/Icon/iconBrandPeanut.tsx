import { Component, ComponentProps } from "solid-js";

export const IconBrandPeanut: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m15 16.25-.816-.36-.462-.196c-1.444-.592-2-.593-3.447-.002l-.462.195-.817.359A4.5 4.5 0 1 1 9 7.756V7.75l1.054.462.434.178c1.292.507 1.863.48 3.237-.082l.462-.195.817-.359a4.5 4.5 0 1 1-.004 8.49" />
  </svg>
);
