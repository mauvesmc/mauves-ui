import { Component, ComponentProps } from "solid-js";

export const IconDental: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 5.5C10.926 4.914 9.417 4 8 4c-2.1-.001-4 1.247-4 5 0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236.398-.505.819-1.439 1.262-2.801.292-.771.892-1.504 1.5-1.5.602.004 1.21.737 1.5 1.5.443 1.362.864 2.295 1.262 2.8.597.759 1.994.993 2.567.237C18.944 17.41 20 13.9 20 9c0-3.74-1.908-4.994-4-5-1.423-.004-2.92.911-4 1.5zM12 5.5 15 7" />
  </svg>
);
