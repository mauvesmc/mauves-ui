import { Component, ComponentProps } from "solid-js";

export const IconFreeRights: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M13.867 9.75c-.246-.48-.708-.769-1.2-.75h-1.334C10.597 9 10 9.67 10 10.5c0 .827.597 1.499 1.333 1.499h1.334c.736 0 1.333.671 1.333 1.5 0 .828-.597 1.499-1.333 1.499h-1.334c-.492.019-.954-.27-1.2-.75M12 7v2M12 15v2M6 6l1.5 1.5M16.5 16.5 18 18" />
  </svg>
);
