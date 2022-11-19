import { Component, ComponentProps } from "solid-js";

export const IconAtomOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 12v.01M9.172 9.172c-3.906 3.905-5.805 8.337-4.243 9.9 1.562 1.561 5.994-.338 9.9-4.244m1.884-2.113c2.587-3.277 3.642-6.502 2.358-7.786-1.284-1.284-4.508-.23-7.784 2.357" />
    <path d="M4.929 4.929c-1.562 1.562.337 5.994 4.243 9.9 3.905 3.905 8.337 5.804 9.9 4.242M19 15c-.767-1.794-2.215-3.872-4.172-5.828C12.884 7.227 10.787 5.77 9 5M3 3l18 18" />
  </svg>
);
