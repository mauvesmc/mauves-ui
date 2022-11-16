import { Meta, StoryFn } from "@storybook/html";
import { Label, LabelProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Label",
  parameters: {
    docs: {
      description: {
        component:
          "Стили меток — это меньшие, утилитарные стили, используемые для таких вещей, как текст внутри компонентов или для очень маленького текста в основной части содержимого, например для подписей.<br/><br/>[Ссылка на Material You](https://m3.material.io/styles/typography/applying-type#af6eb002-9cbb-4b64-bce6-1315d2252364)",
      },
    },
  },
  argTypes: {
    size: {
      name: "size",
      type: "string",
      description: "Размер",
      defaultValue: "large",
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    as: {
      name: "as",
      type: "string",
      description: "Компонент для ренедеринга",
      defaultValue: "p",
    },
    children: {
      name: "children",
      type: "string",
      description: "Дочерний компонент",
    },
    elevation: {
      name: "elevation",
      type: "number",
      description: "Тень",
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5],
      },
    },
    shape: {
      name: "shape",
      type: "string",
      description: "Форма",
      control: {
        type: "select",
        options: [
          "none",
          "extra-small",
          "small",
          "medium",
          "large",
          "extra-large",
          "full",
        ],
      },
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
} as Meta<LabelProps>;

const Template = ((args: LabelProps) => (
  <Label {...args} />
)) as StoryFn<LabelProps>;

export const Default = Template.bind({});
Default.args = {
  children: "Текст Label",
} as LabelProps;

export const Large = Template.bind({});
Large.args = {
  children: "Label Large - 14/20 . +0.1",
  size: "large",
} as LabelProps;

export const Medium = Template.bind({});
Medium.args = {
  children: "Label Medium - 12/16 . +0.5",
  size: "medium",
} as LabelProps;

export const Small = Template.bind({});
Small.args = {
  children: "Label Small - 11/16 . +0.5",
  size: "small",
} as LabelProps;
