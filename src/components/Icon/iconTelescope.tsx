import { Component, ComponentProps } from "solid-js";

export const IconTelescope: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m6 21 6-5 6 5M12 13v8M3.294 13.678l.166.281c.52.88 1.624 1.265 2.605.91l14.242-5.165a1.023 1.023 0 0 0 .565-1.456l-2.62-4.705a1.087 1.087 0 0 0-1.447-.42l-.056.032-12.694 7.618c-1.02.613-1.357 1.897-.76 2.905zM14 5l3 5.5" />
  </svg>
);
