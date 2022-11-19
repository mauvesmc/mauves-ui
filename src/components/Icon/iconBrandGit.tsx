import { Component, ComponentProps } from "solid-js";

export const IconBrandGit: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="16" cy="12" r="1" />
    <circle cx="12" cy="8" r="1" />
    <circle cx="12" cy="16" r="1" />
    <path d="M12 15V9M15 11l-2-2M11 7 9.1 5.1M10.5 20.4l-6.9-6.9c-.781-.781-.781-2.219 0-3l6.9-6.9c.781-.781 2.219-.781 3 0l6.9 6.9c.781.781.781 2.219 0 3l-6.9 6.9c-.781.781-2.219.781-3 0z" />
  </svg>
);
