import { Component, ComponentProps } from "solid-js";

export const IconWashOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 6 1.721 10.329A2 2 0 0 0 6.694 18h10.612c.208 0 .41-.032.6-.092m1.521-2.472L21 6" />
    <path d="M3.486 8.965c.168.02.34.033.514.035.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5m4.92.919c.428-.083.805-.227 1.08-.418.461-.322 1.21-.508 2-.5.79-.008 1.539.178 2 .5.461.32 1.21.508 2 .5a4.88 4.88 0 0 0 .503-.035M3 3l18 18" />
  </svg>
);
