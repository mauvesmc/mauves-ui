import { Meta, StoryFn } from "@storybook/html";
import { FabExtended, FabExtendedProps } from ".";
import { IconCircle } from "../Icon/iconCircle";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Buttons/FabExtended",
  parameters: {
    docs: {
      description: {
        component:
          "Расширенные FAB помогают людям выполнять основные действия. Они шире, чем FAB, чтобы вместить текстовую метку и большую целевую область.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/extended-fab/overview)",
      },
    },
  },
  argTypes: {
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
    icon: {
      name: "icon",
      description: "Иконка",
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
      description: "Текст",
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
} as Meta<FabExtendedProps>;

const Template = ((args: FabExtendedProps) => (
  <FabExtended {...args} />
)) as StoryFn<FabExtendedProps>;

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  children: "Fab Extended",
} as FabExtendedProps;

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Fab Extended",
  icon: <IconCircle />,
} as FabExtendedProps;
