import { Meta, StoryFn } from "@storybook/html";
import { Button, ButtonProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Buttons/Button",
  parameters: {
    docs: {
      description: { component: "Button" },
    },
  },
  argTypes: {
    variant: {
      name: "variant",
      type: "string",
      description: "Вариант",
      defaultValue: "filled",
      control: {
        type: "select",
        options: ["elevated", "filled", "tonal", "outlined", "text"],
      },
    },
    color: {
      name: "color",
      type: "string",
      description: "Цвет",
      defaultValue: "primary",
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "tertiary",
          "success",
          "warning",
          "error",
        ],
      },
    },
    loading: {
      name: "loading",
      type: "boolean",
      description: "Статус загрузки?",
      defaultValue: false,
    },
    disabled: {
      name: "disabled",
      type: "boolean",
      description: "Выключен?",
      defaultValue: false,
    },
    as: {
      name: "as",
      type: "string",
      description: "Компонент для ренедеринга",
      defaultValue: "button",
    },
    children: {
      name: "children",
      type: "string",
      description: "Дочерний компонент",
    },
    m: {
      name: "m",
      type: "number",
      description: "Внешние отступы в пикселях",
    },
    mx: {
      name: "mx",
      type: "number",
      description: "Горизонтальные внешние отступы в пикселях",
    },
    my: {
      name: "my",
      type: "number",
      description: "Вертикальные внешние отступы в пикселях",
    },
    mt: {
      name: "mt",
      type: "number",
      description: "Верхний внешний отступ компонента в пикселях",
    },
    mr: {
      name: "mr",
      type: "number",
      description: "Правый внешний отступ компонента в пикселях",
    },
    mb: {
      name: "mb",
      type: "number",
      description: "Нижний внешний отступ компонента в пикселях",
    },
    ml: {
      name: "ml",
      type: "number",
      description: "Левый внешний отступ компонента в пикселях",
    },
  },
} as Meta<ButtonProps>;

const Template = ((args: ButtonProps) => (
  <Button {...args} />
)) as StoryFn<ButtonProps>;

export const Default = Template.bind({});
Default.args = {
  children: "Кнопка",
} as ButtonProps;

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: "Кнопка",
  leftIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
} as ButtonProps;

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: "Кнопка",
  rightIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chevron-right"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="9 6 15 12 9 18" />
    </svg>
  ),
} as ButtonProps;

export const BothIcons = Template.bind({});
BothIcons.args = {
  children: "Кнопка",
  leftIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  rightIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chevron-right"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="9 6 15 12 9 18" />
    </svg>
  ),
} as ButtonProps;
