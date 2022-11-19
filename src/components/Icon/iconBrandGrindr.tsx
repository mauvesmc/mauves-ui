import { Component, ComponentProps } from "solid-js";

export const IconBrandGrindr: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 13.282c0 .492.784 1.718 2.102 1.718C16.42 15 18 14.034 18 12.938c0-.817-.932-.938-1.409-.938-.228 0-3.591.111-3.591 1.282z" />
    <path d="M12 21c-2.984 0-6.471-2.721-6.63-2.982C3.24 14.528 3 4.315 3 4.315L4.446 3c2.499.39 5.023.617 7.554.68A58.626 58.626 0 0 0 19.554 3L21 4.315s-.24 10.213-2.37 13.704C18.47 18.279 14.984 21 12 21z" />
    <path d="M11 13.282C11 13.774 10.216 15 8.898 15 7.58 15 6 14.034 6 12.938c0-.817.932-.938 1.409-.938.228 0 3.591.111 3.591 1.282z" />
  </svg>
);
