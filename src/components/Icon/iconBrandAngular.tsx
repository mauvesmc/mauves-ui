import { Component, ComponentProps } from "solid-js";

export const IconBrandAngular: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m5.428 17.245 6.076 3.471a1 1 0 0 0 .992 0l6.076-3.471a1 1 0 0 0 .495-.734l1.323-9.704a1 1 0 0 0-.658-1.078l-7.4-2.612a1 1 0 0 0-.665 0L4.268 5.73a1 1 0 0 0-.658 1.078l1.323 9.704a1 1 0 0 0 .495.734z" />
    <path d="m9 15 3-8 3 8M10 13h4" />
  </svg>
);
