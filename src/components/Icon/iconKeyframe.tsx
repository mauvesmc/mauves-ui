import { Component, ComponentProps } from "solid-js";

export const IconKeyframe: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13.225 18.412A1.595 1.595 0 0 1 12 19c-.468 0-.914-.214-1.225-.588l-4.361-5.248a1.844 1.844 0 0 1 0-2.328l4.361-5.248A1.595 1.595 0 0 1 12 5c.468 0 .914.214 1.225.588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z" />
  </svg>
);
