import { Meta, StoryFn } from "@storybook/html";
import { Badge, BadgeProps } from ".";
import { Box } from "../Box";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Badge",
  parameters: {
    docs: {
      description: "Badge",
    },
  },
  argTypes: {
    size: {
      name: "size",
      type: "string",
      description: "Размер",
      defaultValue: "small",
      control: {
        type: "select",
        options: ["small", "large", "large-label"],
      },
    },
    color: {
      name: "color",
      type: "string",
      description: "Цвет",
      defaultValue: "error",
      control: {
        type: "select",
        options: [
          "primary",
          "primary-container",
          "secondary",
          "secondary-container",
          "tertiary",
          "tertiary-container",
          "success",
          "success-container",
          "warning",
          "warning-container",
          "error",
          "error-container",
        ],
      },
    },
    defaultPosition: {
      name: "defaultPosition",
      type: "boolean",
      description: "Включить стандартное позиционирование?",
      defaultValue: false,
    },
    as: {
      name: "as",
      type: "string",
      description: "Компонент для ренедеринга",
      defaultValue: "div",
    },
    children: {
      name: "children",
      type: "string",
      description: "Дочерний компонент",
    },
    elevation: {
      name: "elevation",
      type: "number",
      description: "Тень. 1-5",
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
} as Meta<BadgeProps>;

const Template = ((args: BadgeProps) => (
  <Badge {...args} />
)) as StoryFn<BadgeProps>;

export const Default = Template.bind({});
Default.args = {} as BadgeProps;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: 3,
} as BadgeProps;

export const LargeLabel = Template.bind({});
LargeLabel.args = {
  size: "large-label",
  children: "999+",
} as BadgeProps;

const AllColorsTemplate = ((args: BadgeProps) => (
  <>
    <Badge {...args} my={4} color="primary" />
    <Badge {...args} my={4} color="primary-container" />
    <Badge {...args} my={4} color="secondary" />
    <Badge {...args} my={4} color="secondary-container" />
    <Badge {...args} my={4} color="tertiary" />
    <Badge {...args} my={4} color="tertiary-container" />
    <Badge {...args} my={4} color="success" />
    <Badge {...args} my={4} color="success-container" />
    <Badge {...args} my={4} color="warning" />
    <Badge {...args} my={4} color="warning-container" />
    <Badge {...args} my={4} color="error" />
    <Badge {...args} my={4} color="error-container" />
  </>
)) as StoryFn<BadgeProps>;

export const DefaultAllColors = AllColorsTemplate.bind({});
DefaultAllColors.args = {} as BadgeProps;

export const LargeAllColors = AllColorsTemplate.bind({});
LargeAllColors.args = {
  size: "large",
  children: 3,
} as BadgeProps;

export const LargeLabelAllColors = AllColorsTemplate.bind({});
LargeLabelAllColors.args = {
  size: "large-label",
  children: "999+",
} as BadgeProps;

const TemplateWithIcon = ((args: BadgeProps) => (
  <Box style={{ display: "flex" }}>
    <Box
      style={{
        position: "relative",
        width: "24px",
        height: "24px",
      }}
      mx={16}
    >
      <Badge {...args} size="small" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6L19 18H5L12 6Z"
          fill="currentColor"
        />
      </svg>
    </Box>
    <Box
      style={{
        position: "relative",
        width: "24px",
        height: "24px",
      }}
      mx={16}
    >
      <Badge {...args} size="large" children="3" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6L19 18H5L12 6Z"
          fill="currentColor"
        />
      </svg>
    </Box>
    <Box
      style={{
        position: "relative",
        width: "24px",
        height: "24px",
      }}
      mx={16}
    >
      <Badge {...args} size="large-label" children="999+" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6L19 18H5L12 6Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  </Box>
)) as StoryFn<BadgeProps>;

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  defaultPosition: true,
} as BadgeProps;
