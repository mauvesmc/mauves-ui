import { Meta, StoryFn } from "@storybook/html";
import { Card, CardProps } from ".";
import { Body } from "../Body";
import { Title } from "../Title";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Card",
  parameters: {
    docs: {
      description: {
        component:
          "Карточки содержат содержимое и действия, связанные с информацией о предмете.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/cards/overview)",
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
        options: ["elevated", "filled", "outlined"],
      },
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
} as Meta<CardProps>;

const Template = ((args: CardProps) => (
  <Card {...args} />
)) as StoryFn<CardProps>;

export const Filled = Template.bind({});
Filled.args = {
  p: 16,
  style: { "max-width": "max-content" },
  children: (
    <>
      <Title mb={4}>Заголовок</Title>
      <Body>Большой и нудный текст</Body>
    </>
  ),
} as CardProps;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  p: 16,
  style: { "max-width": "max-content" },
  children: (
    <>
      <Title mb={4}>Заголовок</Title>
      <Body>Большой и нудный текст</Body>
    </>
  ),
} as CardProps;

export const Elevated = Template.bind({});
Elevated.args = {
  variant: "elevated",
  p: 16,
  style: { "max-width": "max-content" },
  children: (
    <>
      <Title mb={4}>Заголовок</Title>
      <Body>Большой и нудный текст</Body>
    </>
  ),
} as CardProps;
