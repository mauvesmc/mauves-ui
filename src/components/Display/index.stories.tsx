import { Meta, StoryFn } from "@storybook/html";
import { Display, DisplayProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Typography/Display",
  parameters: {
    docs: {
      description: {
        component:
          "В шкале типов по умолчанию есть три стиля отображения: большой, средний и маленький. Как самый крупный текст на экране, стили отображения зарезервированы для короткого важного текста или цифр. Лучше всего они работают на больших экранах.<br/><br/>[Ссылка на Material You](https://m3.material.io/styles/typography/applying-type#fea95f28-348c-42ae-95e1-1c5bfd819524)",
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
} as Meta<DisplayProps>;

const Template = ((args: DisplayProps) => (
  <Display {...args} />
)) as StoryFn<DisplayProps>;

export const Default = Template.bind({});
Default.args = {
  children: "Текст Display",
} as DisplayProps;

export const Large = Template.bind({});
Large.args = {
  children: "Display Large - 57/64 . 0",
  size: "large",
} as DisplayProps;

export const Medium = Template.bind({});
Medium.args = {
  children: "Display Medium - 45/52 . 0",
  size: "medium",
} as DisplayProps;

export const Small = Template.bind({});
Small.args = {
  children: "Display Small - 36/44 . 0",
  size: "small",
} as DisplayProps;
