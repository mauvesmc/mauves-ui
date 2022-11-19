import { Component, ComponentProps } from "solid-js";

export const IconBrandDrupal: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 2c0 4.308-7 6-7 12.005a7 7 0 0 0 14 0C19 8 12 6.308 12 2z" />
    <path d="M12 11.33a65.753 65.753 0 0 1-2.012 2.023C8.992 14.31 8 15.32 8 17c0 2.17 1.79 3.997 4 3.997S16 19.17 16 17c0-1.676-.989-2.685-1.983-3.642-.42-.404-2.259-2.357-5.517-5.858l3.5 3.83z" />
  </svg>
);
