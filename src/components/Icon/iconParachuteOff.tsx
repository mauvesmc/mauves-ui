import { Component, ComponentProps } from "solid-js";

export const IconParachuteOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M22 12c0-5.523-4.477-10-10-10-1.737 0-3.37.443-4.794 1.222m-2.28 1.71A9.969 9.969 0 0 0 2 12" />
    <path d="M22 12c0-1.66-1.46-3-3.25-3-1.63 0-2.973 1.099-3.212 2.54m-.097-.09c-.23-1.067-1.12-1.935-2.29-2.284m-3.445.568C8.967 10.284 8.5 11.094 8.5 12c0-1.66-1.46-3-3.25-3C3.45 9 2 10.34 2 12M2 12l10 10-3.5-10M14.582 14.624 12 22l4.992-4.992m2.014-2.014L22 12M3 3l18 18" />
  </svg>
);
