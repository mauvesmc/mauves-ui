import { Meta, StoryFn } from "@storybook/html";
import { Button, ButtonProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Button",
  argTypes: {
    variant: {
      name: "variant",
      type: "string",
      description: "Варианты кнопки",
      defaultValue: "filled",
      control: {
        type: "select",
        options: ["filled", "outlined", "text", "elevated", "tonal"],
      },
    },
    loading: {
      name: "loading",
      type: "boolean",
      description: "Статус загрузки?",
      defaultValue: false,
    },
    center: {
      name: "center",
      type: "boolean",
      description: "Контент по центру?",
      defaultValue: false,
    },
    disabled: {
      name: "disabled",
      type: "boolean",
      description: "Выключена?",
      defaultValue: false,
    },
    leftIcon: {
      name: "leftIcon",
      description: "Иконка слева",
    },
    rightIcon: {
      name: "rightIcon",
      description: "Иконка справа",
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
    w: {
      name: "w",
      type: "number",
      description: "Ширина в пикселях",
    },
    h: {
      name: "h",
      type: "number",
      description: "Высота в пикселях",
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
    p: {
      name: "p",
      type: "number",
      description: "Внутренние отступы в пикселях",
    },
    px: {
      name: "px",
      type: "number",
      description: "Горизонтальные внутренние отступы в пикселях",
    },
    py: {
      name: "py",
      type: "number",
      description: "Вертикальные внутренние отступы в пикселях",
    },
    pt: {
      name: "pt",
      type: "number",
      description: "Верхний внутренний отступ компонента в пикселях",
    },
    pr: {
      name: "pr",
      type: "number",
      description: "Правый внутренний отступ компонента в пикселях",
    },
    pb: {
      name: "pb",
      type: "number",
      description: "Нижний внутренний отступ компонента в пикселях",
    },
    pl: {
      name: "pl",
      type: "number",
      description: "Левый внутренний отступ компонента в пикселях",
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

const Icon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z"
      fill="currentColor"
    />
  </svg>
);

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: "Кнопка",
  leftIcon: <Icon />,
} as ButtonProps;

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: "Кнопка",
  rightIcon: <Icon />,
} as ButtonProps;

export const BothIcons = Template.bind({});
BothIcons.args = {
  children: "Кнопка",
  leftIcon: <Icon />,
  rightIcon: <Icon />,
} as ButtonProps;
