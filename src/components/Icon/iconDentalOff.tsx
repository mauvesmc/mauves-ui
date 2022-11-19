import { Component, ComponentProps } from "solid-js";

export const IconDentalOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19.277 15.281C19.74 13.531 20 11.437 20 9c0-3.74-1.908-4.994-4-5-1.423-.004-2.92.911-4 1.5C10.926 4.914 9.417 4 8 4M5.157 5.153C4.45 5.937 4 7.17 4 9c0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236.398-.505.819-1.439 1.262-2.801.292-.771.892-1.504 1.5-1.5.602.004 1.21.737 1.5 1.5.443 1.362.864 2.295 1.262 2.8.597.759 1.994.993 2.567.237.305-.402.59-.853.852-1.353M12 5.5 15 7M3 3l18 18" />
  </svg>
);
