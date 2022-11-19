import { Component, ComponentProps } from "solid-js";

export const IconTree: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 13-2-2M12 12l2-2M12 21V8M9.824 15.995a3 3 0 0 1-2.743-3.69 2.998 2.998 0 0 1 .304-4.833A3 3 0 0 1 12 3.765a3 3 0 0 1 4.614 3.707 2.997 2.997 0 0 1 .305 4.833A3 3 0 0 1 14 16h-4z" />
  </svg>
);
