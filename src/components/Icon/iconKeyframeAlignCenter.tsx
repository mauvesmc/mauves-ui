import { Component, ComponentProps } from "solid-js";

export const IconKeyframeAlignCenter: Component<ComponentProps<"svg">> = (
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
    <path d="M12 20v2M12.816 16.58c-.207.267-.504.42-.816.42-.312 0-.61-.153-.816-.42l-2.908-3.748a1.39 1.39 0 0 1 0-1.664l2.908-3.748c.207-.267.504-.42.816-.42.312 0 .61.153.816.42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748zM12 2v2M3 12h2M19 12h2" />
  </svg>
);
