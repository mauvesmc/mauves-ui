import { Component, ComponentProps } from "solid-js";

export const IconBriefcaseOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818A1.993 1.993 0 0 1 19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2M8.185 4.158A2 2 0 0 1 10 3h4a2 2 0 0 1 2 2v2M12 12v.01" />
    <path d="M3 13a19.998 19.998 0 0 0 11.905 1.928m3.263-.763A20.003 20.003 0 0 0 21 13M3 3l18 18" />
  </svg>
);
