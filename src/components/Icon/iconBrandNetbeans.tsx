import { Component, ComponentProps } from "solid-js";

export const IconBrandNetbeans: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19 6.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1-1.029 1.748l-6 3.833a2 2 0 0 1-1.942 0l-6-3.833A2 2 0 0 1 4 15.157V8.62a2 2 0 0 1 1.029-1.748l6-3.572a2.056 2.056 0 0 1 2 0l6 3.573H19z" />
    <path d="M15.5 9.43a1 1 0 0 1 .5.874v3.268a1 1 0 0 1-.515.874l-3 1.917a1 1 0 0 1-.97 0l-3-1.917A1 1 0 0 1 8 13.573v-3.269a1 1 0 0 1 .514-.874l3-1.786c.311-.173.69-.173 1 0l3 1.787H15.5z" />
    <path d="M12 21v-9L4.5 7.5M12 12l7.5-4.5M12 3v4.5M19.5 16 16 14M8 14l-3.5 2" />
  </svg>
);
