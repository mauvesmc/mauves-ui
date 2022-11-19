import { Meta, StoryFn } from "@storybook/html";
import { IconButton, IconButtonProps } from ".";
import { Box } from "../Box";
import { IconSettings } from "../Icon/iconSettings";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Buttons/IconButton",
  parameters: {
    docs: {
      description: {
        component:
          "IconButton помогают людям выполнять дополнительные действия одним нажатием.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/icon-buttons/overview)",
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
        options: ["filled", "outlined", "tonal", "standard"],
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
    selected: {
      name: "selected",
      type: "boolean",
      description: "Выбран?",
      defaultValue: false,
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
      description: "Дочерний компонент-иконка",
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
} as Meta<IconButtonProps>;

const Template = ((args: IconButtonProps) => (
  <IconButton {...args}>
    <IconSettings />
  </IconButton>
)) as StoryFn<IconButtonProps>;

export const Default = Template.bind({});
Default.args = {} as IconButtonProps;

const TemplateAllColors = ((args: IconButtonProps) => (
  <Box style={{ display: "flex" }}>
    <IconButton {...args} mx={4} color="primary">
      <IconSettings />
    </IconButton>
    <IconButton {...args} mx={4} color="secondary">
      <IconSettings />
    </IconButton>
    <IconButton {...args} mx={4} color="tertiary">
      <IconSettings />
    </IconButton>
    <IconButton {...args} mx={4} color="success">
      <IconSettings />
    </IconButton>
    <IconButton {...args} mx={4} color="warning">
      <IconSettings />
    </IconButton>
    <IconButton {...args} mx={4} color="error">
      <IconSettings />
    </IconButton>
  </Box>
)) as StoryFn<IconButtonProps>;

export const AllColors = TemplateAllColors.bind({});
AllColors.args = {} as IconButtonProps;
