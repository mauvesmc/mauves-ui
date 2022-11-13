import { Meta, StoryFn } from "@storybook/html";
import { createSignal } from "solid-js";
import { Checkbox, CheckboxProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Checkbox",
  argTypes: {
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
    error: {
      name: "error",
      type: "boolean",
      description: "Ошибка?",
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
      defaultValue: "label",
    },
    children: {
      name: "children",
      type: "string",
      description: "Дочерний компонент",
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
} as Meta<CheckboxProps>;

const Template = ((args: CheckboxProps) => {
  const [checked, setChecked] = createSignal(args.checked);

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

export const Indeterminate = Template.bind({});
Indeterminate.args = { indeterminate: true } as CheckboxProps;

export const Error = Template.bind({});
Error.args = { error: true } as CheckboxProps;

export const IndeterminateError = Template.bind({});
IndeterminateError.args = { indeterminate: true, error: true } as CheckboxProps;
