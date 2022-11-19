import { Component, ComponentProps } from "solid-js";

export const IconBrandSamsungpass: Component<ComponentProps<"svg">> = (
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
    <rect width="16" height="11" x="4" y="10" rx="2" />
    <path d="M7 10V8.138C7 5.3 9.239 3 12 3s5 2.3 5 5.138V10M10.485 17.577c.337.29.7.423 1.515.423h.413c.323 0 .633-.133.862-.368a1.27 1.27 0 0 0 .356-.886c0-.332-.128-.65-.356-.886a1.203 1.203 0 0 0-.862-.368h-.826a1.2 1.2 0 0 1-.861-.367 1.27 1.27 0 0 1-.356-.886c0-.332.128-.651.356-.886a1.2 1.2 0 0 1 .861-.368H12c.816 0 1.178.133 1.515.423" />
  </svg>
);
