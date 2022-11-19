import { Meta, StoryFn } from "@storybook/html";
import { Button, ButtonProps } from ".";
import { IconChevronRight } from "../Icon/iconChevronRight";
import { IconCircle } from "../Icon/iconCircle";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Buttons/Button",
  parameters: {
    docs: {
      description: {
        component:
          "Кнопки помогают людям инициировать действия, от отправки электронного письма до совместного использования документа и отметки «Нравится» публикации.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/buttons/overview)",
      },
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
  leftIcon: <IconCircle />,
} as ButtonProps;

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: "Кнопка",
  rightIcon: <IconChevronRight />,
} as ButtonProps;

export const BothIcons = Template.bind({});
BothIcons.args = {
  children: "Кнопка",
  leftIcon: <IconCircle />,
  rightIcon: <IconChevronRight />,
} as ButtonProps;
