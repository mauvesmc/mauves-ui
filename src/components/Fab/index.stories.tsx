import { Meta, StoryFn } from "@storybook/html";
import { Fab, FabProps } from ".";
import { IconSettings } from "../Icon/iconSettings";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Buttons/Fab",
  parameters: {
    docs: {
      description: {
        component:
          "FAB представляет наиболее важное действие на экране. Он делает ключевые действия доступными.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/floating-action-button/overview)",
      },
    },
  },
  argTypes: {
    size: {
      name: "size",
      type: "string",
      description: "Размер",
      defaultValue: "medium",
      control: {
        type: "select",
        options: ["small", "medium", "large"],
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
          "surface",
          "primary",
          "secondary",
          "tertiary",
          "success",
          "warning",
          "error",
        ],
      },
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
} as Meta<FabProps>;

const Template = ((args: FabProps) => (
  <Fab {...args}>
    <IconSettings />
  </Fab>
)) as StoryFn<FabProps>;

export const Default = Template.bind({});
Default.args = {} as FabProps;
