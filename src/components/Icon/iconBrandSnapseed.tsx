import { Component, ComponentProps } from "solid-js";

export const IconBrandSnapseed: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.152 3.115a.46.46 0 0 0-.609 0C4.6 5.695 3.014 8.556 3 11.493c0 2.928 1.586 5.803 4.543 8.392a.46.46 0 0 0 .61 0c2.957-2.589 4.547-5.464 4.547-8.392 0-2.928-1.6-5.799-4.548-8.378z" />
    <path d="m8 20 12.09-.011c.503 0 .91-.434.91-.969v-6.063c0-.535-.407-.968-.91-.968h-7.382" />
  </svg>
);
