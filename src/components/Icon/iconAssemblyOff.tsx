import { Component, ComponentProps } from "solid-js";

export const IconAssemblyOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.703 4.685 11.029 3.3a2.056 2.056 0 0 1 2 0l6 3.573H19a2 2 0 0 1 1 1.747v6.536c0 .248-.046.49-.132.715m-2.156 1.837-4.741 3.029a2 2 0 0 1-1.942 0l-6-3.833A2 2 0 0 1 4 15.157V8.62a2 2 0 0 1 1.029-1.748l1.157-.689" />
    <path d="M11.593 7.591c.295-.133.637-.12.921.04l3 1.79H15.5c.312.181.503.516.5.877V12m-1.152 2.86-2.363 1.514a.997.997 0 0 1-.97 0l-3-1.922A1.003 1.003 0 0 1 8 13.576v-3.278c0-.364.197-.7.514-.877l.568-.339M3 3l18 18" />
  </svg>
);
