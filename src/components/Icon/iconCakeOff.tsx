import { Component, ComponentProps } from "solid-js";

export const IconCakeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M21 17v-5a3 3 0 0 0-3-3h-5M9 9H6a3 3 0 0 0-3 3v8h17" />
    <path d="M2.996 14.803c.312.135.654.204 1.004.197a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1m4 0a2.4 2.4 0 0 0 2 1c.35.007.692-.062 1.004-.197M10.172 6.188c.07-.158.163-.31.278-.451L12 4l1.465 1.638a2 2 0 0 1-.65 3.19M3 3l18 18" />
  </svg>
);
