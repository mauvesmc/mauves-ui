import { Component, ComponentProps } from "solid-js";

export const IconBrandTailwind: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11.667 6C9.177 6 7.623 7.222 7 9.667c.933-1.223 2.023-1.68 3.267-1.375.71.174 1.217.68 1.778 1.24.916.912 2 1.968 4.288 1.968 2.49 0 4.044-1.222 4.667-3.667-.933 1.223-2.023 1.68-3.267 1.375-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6zm-4 6.5c-2.49 0-4.044 1.222-4.667 3.667.933-1.223 2.023-1.68 3.267-1.375.71.174 1.217.68 1.778 1.24.916.912 1.975 1.968 4.288 1.968 2.49 0 4.044-1.222 4.667-3.667-.933 1.223-2.023 1.68-3.267 1.375-.71-.174-1.217-.68-1.778-1.24-.916-.912-1.975-1.968-4.288-1.968z" />
  </svg>
);
