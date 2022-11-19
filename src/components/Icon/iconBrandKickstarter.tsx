import { Component, ComponentProps } from "solid-js";

export const IconBrandKickstarter: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="m11 9 2.975-4.65C14.59 3.45 15.38 3 16.352 3c.79 0 1.474.286 2.054.858.576.574.866 1.256.866 2.054 0 .588-.153 1.109-.46 1.559L16 11.5l3.465 4.912c.356.46.535.998.535 1.613a2.92 2.92 0 0 1-.843 2.098c-.561.584-1.242.877-2.04.877-.876 0-1.545-.29-2.005-.87L11 14.433V17.5c0 .876-.313 1.69-.611 2.175C9.846 20.558 9.039 21 8 21c-.944 0-1.753-.327-2.271-.974-.486-.6-.729-1.392-.729-2.38V6.275c0-.934.247-1.706.74-2.313C6.252 3.321 7.087 3 8 3c.868 0 1.821.321 2.4.962.323.356.515.714.6 1.08.052.224 0 .643 0 1.26V9z" />
  </svg>
);
