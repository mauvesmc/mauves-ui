import { Component, ComponentProps } from "solid-js";

export const IconEmpathizeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 8a2.5 2.5 0 1 0-2.5-2.5M12.317 12.315l-.317.317-.728-.727a3.088 3.088 0 1 0-4.367 4.367L12 21.368l4.689-4.69m1.324-2.673a3.087 3.087 0 0 0-3.021-3.018M3 3l18 18" />
  </svg>
);
