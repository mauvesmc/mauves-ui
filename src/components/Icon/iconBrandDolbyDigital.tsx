import { Component, ComponentProps } from "solid-js";

export const IconBrandDolbyDigital: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M21 6v12h-.89c-3.34 0-6.047-2.686-6.047-6s2.707-6 6.046-6H21zM3.063 6v12h.891C7.294 18 10 15.314 10 12S7.293 6 3.954 6h-.89z" />
  </svg>
);
