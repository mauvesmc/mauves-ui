import { Component, ComponentProps } from "solid-js";

export const IconLanguageOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13" />
    <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4M12 20l2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18" />
  </svg>
);
