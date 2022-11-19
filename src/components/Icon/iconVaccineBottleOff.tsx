import { Component, ComponentProps } from "solid-js";

export const IconVaccineBottleOff: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4M8.7 8.705a1.806 1.806 0 0 1-.2.045c-.866.144-1.5.893-1.5 1.77V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2m0-4v-2.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0 1 14 6.98V6M7 12h5m4 0h1M7 18h10M11 15h2M3 3l18 18" />
  </svg>
);
