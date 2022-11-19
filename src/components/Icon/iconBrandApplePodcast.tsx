import { Component, ComponentProps } from "solid-js";

export const IconBrandApplePodcast: Component<ComponentProps<"svg">> = (
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
    <path d="M18.364 18.364a9 9 0 1 0-12.728 0" />
    <path d="M11.766 22h.468a2 2 0 0 0 1.985-1.752l.5-4A2 2 0 0 0 12.734 14h-1.468a2 2 0 0 0-1.985 2.248l.5 4A2 2 0 0 0 11.766 22z" />
    <circle cx="12" cy="9" r="2" />
  </svg>
);
