import { Meta, StoryFn } from "@storybook/html";
import { BottomAppBar, BottomAppBarProps } from ".";
import { Fab } from "../Fab";
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-circle"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    </IconButton>
    <IconButton variant="standard">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-box"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
        <line x1="12" y1="12" x2="20" y2="7.5" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <line x1="12" y1="12" x2="4" y2="7.5" />
      </svg>
    </IconButton>
    <IconButton variant="standard">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-square"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>
    </IconButton>
    <IconButton variant="standard">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-cookie"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 13v.01" />
        <path d="M12 17v.01" />
        <path d="M12 12v.01" />
        <path d="M16 14v.01" />
        <path d="M11 8v.01" />
        <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z" />
      </svg>
    </IconButton>
  </BottomAppBar>
)) as StoryFn<BottomAppBarProps>;

export const WithIcons = Template.bind({});
WithIcons.args = {} as BottomAppBarProps;

export const WithIconsAndFab = Template.bind({});
WithIconsAndFab.args = {
  fab: (
    <Fab>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-plus"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </Fab>
  ),
} as BottomAppBarProps;
