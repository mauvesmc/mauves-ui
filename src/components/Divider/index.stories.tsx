import { Meta, StoryFn } from "@storybook/html";
import { Divider, DividerProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Divider",
  parameters: {
    docs: {
      description: {
        component:
          "Divider — это тонкая линия, которая группирует содержимое в списки и контейнеры.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/divider/overview)",
      },
    },
  },
  argTypes: {
    orientation: {
      name: "orientation",
      type: "string",
      description: "Ориентация",
      defaultValue: "horizontal",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    variant: {
      name: "variant",
      type: "string",
      description: "Вариант",
      defaultValue: "full",
      control: {
        type: "select",
        options: ["full", "inset", "middle-inset"],
      },
    },
    as: {
      name: "as",
      type: "string",
      description: "Компонент для ренедеринга",
      defaultValue: "div",
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
} as Meta<DividerProps>;

const Template = ((args: DividerProps) => (
  <Divider {...args} />
)) as StoryFn<DividerProps>;

export const Default = Template.bind({});
Default.args = {} as DividerProps;
