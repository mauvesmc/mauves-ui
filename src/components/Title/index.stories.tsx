import { Meta, StoryFn } from "@storybook/html";
import { Title, TitleProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Typography/Title",
  parameters: {
    docs: {
      description: {
        component:
          "Заголовки меньше, чем стили заголовков, и их следует использовать для текста со средним акцентом, который остается относительно коротким. Например, рассмотрите возможность использования стилей заголовков для разделения второстепенных отрывков текста или второстепенных областей содержимого.<br/><br/>[Ссылка на Material You](https://m3.material.io/styles/typography/applying-type#e9e0cea3-10cb-405d-98a9-cf6a90758967)",
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
} as Meta<TitleProps>;

const Template = ((args: TitleProps) => (
  <Title {...args} />
)) as StoryFn<TitleProps>;

export const Default = Template.bind({});
Default.args = {
  children: "Текст Title",
} as TitleProps;

export const Large = Template.bind({});
Large.args = {
  children: "Title Large - 22/28 . 0",
  size: "large",
} as TitleProps;

export const Medium = Template.bind({});
Medium.args = {
  children: "Title Medium - 16/24 . +0.15",
  size: "medium",
} as TitleProps;

export const Small = Template.bind({});
Small.args = {
  children: "Title Small - 14/20 . +0.1",
  size: "small",
} as TitleProps;
