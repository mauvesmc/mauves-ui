import { Meta, StoryFn } from "@storybook/html";
import { createSignal } from "solid-js";
import { Checkbox, CheckboxProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Checkbox",
  parameters: {
    docs: {
      description: {
        component:
          "Checkboxes позволяют пользователям выбирать один или несколько элементов из набора. Checkboxes могут включать или выключать параметр.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/checkbox/overview)",
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
          "primary",
          "secondary",
          "tertiary",
          "success",
          "warning",
          "error",
        ],
      },
    },
    checked: {
      name: "checked",
      type: "boolean",
      description: "Выбран?",
      defaultValue: false,
    },
    indeterminate: {
      name: "indeterminate",
      type: "boolean",
      description: "Неопределен?",
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
      defaultValue: "div",
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
} as Meta<CheckboxProps>;

const Template = ((args: CheckboxProps) => {
  const [checked, setChecked] = createSignal(args.checked ?? false);

  return (
    <Checkbox
      {...args}
      checked={checked()}
      onChange={() => setChecked((p) => !p)}
    />
  );
}) as StoryFn<CheckboxProps>;

export const Default = Template.bind({});
Default.args = {} as CheckboxProps;
