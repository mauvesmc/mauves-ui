import { Meta, StoryFn } from "@storybook/html";
import { BottomSheet, BottomSheetProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/BottomSheet",
  parameters: {
    docs: {
      description: {
        component:
          "BottomSheet — это поверхности, содержащие дополнительный контент, привязанный к нижней части экрана.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/bottom-sheets/overview)",
      },
    },
  },
  argTypes: {
    modal: {
      name: "modal",
      type: "boolean",
      description: "С использованием тени",
      defaultValue: false,
    },
    pxToRemove: {
      name: "pxToRemove",
      type: "number",
      description: "Пиксели до закрытия при свайпе",
      defaultValue: 96,
    },
    onClose: {
      name: "onClose",
      description: "Вызывается при одном из вариантов закрытия",
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
} as Meta<BottomSheetProps>;

const Template = ((args: BottomSheetProps) => (
  <BottomSheet {...args} />
)) as StoryFn<BottomSheetProps>;

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate commodi sequi veritatis illum minus at ut nobis? Quo, impedit. Nulla et quidem nam fuga unde, consequuntur molestiae odio nobis voluptates eaque dolores aspernatur. Ea praesentium quas possimus eaque ab rerum ex eos odit accusamus a nemo consectetur, iure distinctio saepe id temporibus similique laboriosam at ut ad harum.",
} as BottomSheetProps;
