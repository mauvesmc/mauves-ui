import { Component, ComponentProps } from "solid-js";

export const IconVaccineBottle: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="6" height="3" x="9" y="3" rx="1" />
    <path d="M10 6v.98c0 .877-.634 1.626-1.5 1.77-.866.144-1.5.893-1.5 1.77V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0 1 14 6.98V6M7 12h10M7 18h10M11 15h2" />
  </svg>
);
