import { Component, ComponentProps } from "solid-js";

export const IconSunWind: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14.468 10.005a4 4 0 1 0-5.466 5.46M2 12h1M11 3v1M11 20v1M4.6 5.6l.7.7M17.4 5.6l-.7.7M5.3 17.7l-.7.7M15 13h5a2 2 0 1 0 0-4M12 16h5.714l.253-.004A2.004 2.004 0 0 1 20 18a2 2 0 0 1-2 2h-.286" />
  </svg>
);
