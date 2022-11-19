import { Component, ComponentProps } from "solid-js";

export const IconUmbrellaOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 12H4c0-2.209.895-4.208 2.342-5.656m2.382-1.645A8 8 0 0 1 20 12l-4 .001M12 12v6a2 2 0 1 0 4 0M3 3l18 18" />
  </svg>
);
