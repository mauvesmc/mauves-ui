import { Component, ComponentProps } from "solid-js";

export const IconAugmentedRealityOff: Component<ComponentProps<"svg">> = (
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
    <path d="M4 8V6c0-.557.228-1.061.595-1.424M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2c.558 0 1.062-.228 1.425-.596M12 12.5l.312-.195m2.457-1.536L16 10M9.225 9.235 8 10l4 2.5V17l3.076-1.923M16 12v-2l-4-2.5-.302.189" />
    <path d="M8 10v4.5l4 2.5M3 3l18 18" />
  </svg>
);
