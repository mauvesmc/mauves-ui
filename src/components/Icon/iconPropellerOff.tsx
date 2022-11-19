import { Component, ComponentProps } from "solid-js";

export const IconPropellerOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10.448 10.432a3 3 0 1 0 4.106 4.143M14.272 10.272c.66-1.459 1.058-2.888 1.198-4.286C15.69 4.356 14.708 3 12 3c-1.94 0-2.994.696-3.355 1.69m.697 4.653c.145.384.309.77.491 1.157M13.169 16.751c.97 1.395 2.057 2.523 3.257 3.386 1.02.789 2.265.853 3.408-.288m1.479-2.493c.492-1.634-.19-2.726-1.416-3.229a12.78 12.78 0 0 0-2.65-.852" />
    <path d="M8.664 12.999c-1.693.143-3.213.52-4.56 1.128-1.522.623-2.206 2.153-.852 4.498s3.02 2.517 4.321 1.512c1.2-.863 2.287-1.991 3.258-3.386M3 3l18 18" />
  </svg>
);
