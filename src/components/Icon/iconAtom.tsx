import { Component, ComponentProps } from "solid-js";

export const IconAtom: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 12v.01M19.071 4.929c-1.562-1.562-5.994.337-9.9 4.243-3.905 3.905-5.804 8.337-4.242 9.9 1.562 1.561 5.994-.338 9.9-4.244 3.905-3.905 5.804-8.337 4.242-9.9" />
    <path d="M4.929 4.929c-1.562 1.562.337 5.994 4.243 9.9 3.905 3.905 8.337 5.804 9.9 4.242 1.561-1.562-.338-5.994-4.244-9.9-3.905-3.905-8.337-5.804-9.9-4.242" />
  </svg>
);
