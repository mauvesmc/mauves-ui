import { Component, ComponentProps } from "solid-js";

export const IconBaguette: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m5.628 11.283 5.644-5.637c2.665-2.663 5.924-3.747 8.663-1.205l.188.181a2.987 2.987 0 0 1 0 4.228L8.836 20.124a2.996 2.996 0 0 1-4.089.135l-.143-.135C1.876 17.4 2.9 14.007 5.628 11.283zM9.5 7.5 11 11M6.5 10.5 8 14M12.5 4.5 14 8" />
  </svg>
);
