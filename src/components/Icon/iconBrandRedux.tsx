import { Component, ComponentProps } from "solid-js";

export const IconBrandRedux: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16.54 7c-.805-2.365-2.536-4-4.54-4-2.774 0-5.023 2.632-5.023 6.496 0 1.956 1.582 4.727 2.512 5.996" />
    <path d="M4.711 11.979C3.055 13.856 2.497 16.164 3.5 17.89c1.387 2.39 5.138 2.831 8.501.9 1.703-.979 2.875-3.362 3.516-4.798" />
    <path d="M15.014 19.99c2.511 0 4.523-.438 5.487-2.1 1.387-2.39-.215-5.893-3.579-7.824-1.702-.979-4.357-1.235-5.927-1.07" />
    <path d="M10.493 9.862c.48.276 1.095.112 1.372-.366a.997.997 0 0 0-.367-1.365 1.007 1.007 0 0 0-1.373.366.997.997 0 0 0 .368 1.365z" />
    <ellipse cx="9.5" cy="15.5" rx="1" />
    <ellipse cx="15.5" cy="14" rx="1" />
  </svg>
);
