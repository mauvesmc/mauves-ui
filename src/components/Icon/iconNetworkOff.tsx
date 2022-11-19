import { Component, ComponentProps } from "solid-js";

export const IconNetworkOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6.537 6.516a6 6 0 0 0 7.932 7.954m2.246-1.76A6 6 0 0 0 8.3 4.277" />
    <path d="M12 3c1.333.333 2 2.333 2 6 0 .348-.006.681-.018 1m-.545 3.43c-.332.89-.811 1.414-1.437 1.57M12 3c-.938.234-1.547 1.295-1.825 3.182m-.156 3.837c.117 3.02.777 4.68 1.981 4.981M6 9h3m4 0h5M3 19h7M14 19h5" />
    <circle cx="12" cy="19" r="2" />
    <path d="M12 15v2M3 3l18 18" />
  </svg>
);
