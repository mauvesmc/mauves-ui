import { Component, ComponentProps } from "solid-js";

export const IconCookie: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 13v.01M12 17v.01M12 12v.01M16 14v.01M11 8v.01M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053.132a3 3 0 0 1 0 2.296c-.497.786-.838 1.404-1.024 1.852-.189.456-.409 1.194-.66 2.216a3 3 0 0 1-1.624 1.623c-1.048.263-1.787.483-2.216.661-.475.197-1.092.538-1.852 1.024a3 3 0 0 1-2.296 0C10.05 20.021 9.433 19.68 9 19.5c-.471-.195-1.21-.415-2.216-.66a3 3 0 0 1-1.623-1.624c-.265-1.052-.485-1.79-.661-2.216-.198-.479-.54-1.096-1.024-1.852a3 3 0 0 1 0-2.296c.48-.744.82-1.361 1.024-1.852.171-.413.391-1.152.66-2.216a3 3 0 0 1 1.624-1.623C7.816 4.905 8.554 4.685 9 4.5c.458-.19 1.075-.531 1.852-1.024a3 3 0 0 1 2.296 0z" />
  </svg>
);
