import { Component, ComponentProps } from "solid-js";

export const IconBrandHipchat: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17.802 17.292s.077-.055.2-.149C19.845 15.718 21 13.653 21 11.354c0-4.286-4.03-7.764-8.998-7.764C7.032 3.59 3 7.068 3 11.354 3 15.642 7.03 19 12 19c.424 0 1.12-.028 2.088-.084 1.262.82 3.104 1.493 4.716 1.493.499 0 .734-.41.414-.828-.486-.596-1.156-1.551-1.416-2.29z" />
    <path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" />
  </svg>
);
