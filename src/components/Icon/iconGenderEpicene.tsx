import { Component, ComponentProps } from "solid-js";

export const IconGenderEpicene: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15.536 15.536a5 5 0 1 0-7.072-7.072 5 5 0 0 0 7.072 7.072zM15.536 15.535 21 10M3 14l5.464-5.535M12 12h.01" />
  </svg>
);
