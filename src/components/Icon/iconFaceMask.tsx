import { Component, ComponentProps } from "solid-js";

export const IconFaceMask: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5.002 14.5H4.78c-1.535 0-2.778-1.12-2.778-2.5S3.245 9.5 4.78 9.5h.222M19.002 14.5h.222c1.534 0 2.778-1.12 2.778-2.5s-1.244-2.5-2.778-2.5h-.222M9 10h6M9 14h6" />
    <path d="m12.55 18.843 5-1.429A2 2 0 0 0 19 15.491V8.51a2 2 0 0 0-1.45-1.923l-5-1.429a2 2 0 0 0-1.1 0l-5 1.429A2 2 0 0 0 5 8.509v6.982a2 2 0 0 0 1.45 1.923l5 1.429a2 2 0 0 0 1.1 0z" />
  </svg>
);
