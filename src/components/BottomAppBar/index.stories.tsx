import { Meta, StoryFn } from "@storybook/html";
import { BottomAppBar, BottomAppBarProps } from ".";
import { Fab } from "../Fab";
import { IconBox } from "../Icon/iconBox";
import { IconCircle } from "../Icon/iconCircle";
import { IconCookie } from "../Icon/iconCookie";
import { IconPlus } from "../Icon/iconPlus";
import { IconSquare } from "../Icon/iconSquare";
import { IconButton } from "../IconButton";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/BottomAppBar",
  parameters: {
    docs: {
      description: {
        component:
          "Нижняя панель приложения отображает навигацию и основные действия в нижней части мобильных экранов.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/bottom-app-bar/overview)",
      },
    },
  },
  argTypes: {
    fab: {
      name: "fab",
      description: "Fab",
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
  },
} as Meta<BottomAppBarProps>;

const Template = ((args: BottomAppBarProps) => (
  <BottomAppBar {...args}>
    <IconButton variant="standard">
      <IconCircle />
    </IconButton>
    <IconButton variant="standard">
      <IconBox />
    </IconButton>
    <IconButton variant="standard">
      <IconSquare />
    </IconButton>
    <IconButton variant="standard">
      <IconCookie />
    </IconButton>
  </BottomAppBar>
)) as StoryFn<BottomAppBarProps>;

export const WithIcons = Template.bind({});
WithIcons.args = {} as BottomAppBarProps;

export const WithIconsAndFab = Template.bind({});
WithIconsAndFab.args = {
  fab: (
    <Fab>
      <IconPlus />
    </Fab>
  ),
} as BottomAppBarProps;
