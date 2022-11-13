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
      defaultValue: "#8e7cc3",
      description: "Базовый цвет",
    },
  },
} as Meta<{ color: string }>;

const Template = ((args) => <ColorPalette {...args} />) as StoryFn<{
  color: string;
}>;

export const Default = Template.bind({});
Default.args = {} as { color: string };
