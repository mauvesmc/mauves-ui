import { Component, ComponentProps } from "solid-js";

export const IconDna2Off: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 3v1c-.007 2.46-.91 4.554-2.705 6.281M12 12c-3.328 1.99-4.997 4.662-5.008 8.014v1M17 21.014v-1c-.004-1.44-.315-2.755-.932-3.944M12 12c-1.903-1.138-3.263-2.485-4.082-4.068M8 4h9M7 20h10M12 8h4M8 16h8M3 3l18 18" />
  </svg>
);
