import { Component, ComponentProps } from "solid-js";

export const IconWallOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361.36-.86.583-1.411.583H6a2 2 0 0 1-2-2V6c0-.55.222-1.047.58-1.409M4 8h4m4 0h8M20 12h-4m-4 0H4M4 16h12M9 4v1M14 8v2M8 12v4M11 16v4M3 3l18 18" />
  </svg>
);
