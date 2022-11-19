import { Component, ComponentProps } from "solid-js";

export const IconClipboardHeart: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect width="6" height="4" x="9" y="3" rx="2" />
    <path d="m11.993 16.75 2.747-2.815a1.9 1.9 0 0 0 .005-2.632 1.775 1.775 0 0 0-2.56-.005l-.183.188-.183-.189a1.775 1.775 0 0 0-2.56-.004 1.899 1.899 0 0 0-.004 2.632l2.738 2.825z" />
  </svg>
);
