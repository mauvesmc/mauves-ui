import { Meta, StoryFn } from "@storybook/html";
import { ColorPalette } from "./ColorPalette";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Docs/Color",
  parameters: {
    docs: {
      description: "Цвета",
    },
  },
  argTypes: {
    color: {
      name: "color",
      type: "string",
      defaultValue: "#2563eb",
      description: "Базовый цвет",
      control: { type: "color" },
    },
    success: {
      name: "success",
      type: "string",
      defaultValue: "#2feb1f",
      description: "Цвет успеха",
      control: { type: "color" },
    },
    warning: {
      name: "warning",
      type: "string",
      defaultValue: "#f5c13b",
      description: "Цвет опасности",
      control: { type: "color" },
    },
    error: {
      name: "error",
      type: "string",
      defaultValue: "#e1824d",
      description: "Цвет ошибки",
      control: { type: "color" },
    },
  },
} as Meta<{ color: string }>;

const Template = ((args) => <ColorPalette {...args} />) as StoryFn<{
  color: string;
  success: string;
  warning: string;
  error: string;
}>;

export const Default = Template.bind({});
Default.args = {} as {
  color: string;
  success: string;
  warning: string;
  error: string;
};
