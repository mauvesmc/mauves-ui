import { Component, ComponentProps } from "solid-js";

export const IconPaw: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14.7 13.5C13.6 11.504 13.259 11 12 11c-1.259 0-1.736.755-2.836 2.747-.942 1.703-2.846 1.845-3.321 3.291-.097.265-.145.677-.143.962 0 1.176.787 2 1.8 2 1.259 0 3.004-1 4.5-1s3.241 1 4.5 1c1.013 0 1.8-.823 1.8-2 0-.285-.049-.697-.146-.962-.475-1.451-2.512-1.835-3.454-3.538zM20.188 8.082A1.039 1.039 0 0 0 19.782 8h-.015c-.735.012-1.56.75-1.993 1.866-.519 1.335-.28 2.7.538 3.052.129.055.267.082.406.082.739 0 1.575-.742 2.011-1.866.516-1.335.273-2.7-.54-3.052zM9.474 9c.055 0 .109-.004.163-.011.944-.128 1.533-1.346 1.32-2.722C10.754 4.97 9.91 4 9.025 4c-.055 0-.109.004-.163.011-.944.128-1.533 1.346-1.32 2.722C7.746 8.026 8.59 9 9.475 9zM16.456 6.733c.214-1.376-.375-2.594-1.32-2.722A1.164 1.164 0 0 0 14.974 4c-.885 0-1.728.97-1.93 2.267-.214 1.376.375 2.594 1.32 2.722.054.007.108.011.162.011.885 0 1.73-.974 1.93-2.267zM5.69 12.918c.816-.352 1.054-1.719.536-3.052C5.79 8.742 4.955 8 4.217 8c-.14 0-.277.027-.407.082-.816.352-1.054 1.719-.536 3.052C3.71 12.258 4.545 13 5.283 13c.14 0 .277-.027.407-.082z" />
  </svg>
);
