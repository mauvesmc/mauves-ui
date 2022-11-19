import { Component, ComponentProps } from "solid-js";

export const IconHexagon3D: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728-.394 1.399-1.03 1.753l-5.999 3.844a1.995 1.995 0 0 1-1.942 0l-6-3.844A2.007 2.007 0 0 1 4 15.152V8.596c0-.729.394-1.4 1.029-1.753l6-3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03zM12 16.5V21M4.5 7.5 8 10M16 10l4-2.5" />
    <path d="M12 7.5V12l-4 2M12 12l4 2" />
    <path d="m12 16.5 4-2.5v-4l-4-2.5L8 10v4z" />
  </svg>
);
