import { Component, ComponentProps } from "solid-js";

export const IconSnowflake: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m10 4 2 1 2-1" />
    <path d="M12 2v6.5l3 1.72M17.928 6.268l.134 2.232 1.866 1.232" />
    <path d="m20.66 7-5.629 3.25.01 3.458M19.928 14.268 18.062 15.5l-.134 2.232" />
    <path d="m20.66 17-5.629-3.25-2.99 1.738M14 20l-2-1-2 1" />
    <path d="M12 22v-6.5l-3-1.72M6.072 17.732 5.938 15.5l-1.866-1.232" />
    <path d="m3.34 17 5.629-3.25-.01-3.458M4.072 9.732 5.938 8.5l.134-2.232" />
    <path d="m3.34 7 5.629 3.25 2.99-1.738" />
  </svg>
);
