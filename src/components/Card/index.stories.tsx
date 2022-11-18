import { Meta, StoryFn } from "@storybook/html";
import { Card, CardProps } from ".";
import { Body } from "../Body";
import { Box } from "../Box";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
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
  style: { width: "360px" },
  children: (
    <>
      <Box
        pl={16}
        p={12}
        pr={4}
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        <Box style={{ flex: "1", display: "flex", "align-items": "center" }}>
          <Box
            style={{
              background: "var(--theme-sys-primary)",
              color: "var(--theme-sys-on-primary)",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
            }}
            shape="full"
            w={40}
            h={40}
            mr={16}
          >
            <Title size="medium">А</Title>
          </Box>
          <Box style={{ color: "var(--theme-sys-on-surface)" }}>
            <Title size="medium">Заголовок</Title>
            <Body size="medium">Подзаголовок</Body>
          </Box>
        </Box>
        <IconButton variant="standard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-dots-vertical"
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="12" cy="5" r="1" />
          </svg>
        </IconButton>
      </Box>
      <Box
        style={{
          background: "var(--theme-sys-surface-3)",
          "aspect-ratio": "16 / 9",
        }}
      />
      <Box p={16}>
        <Body size="large" style={{ color: "var(--theme-sys-on-surface)" }}>
          Заголовок
        </Body>
        <Body
          size="medium"
          mb={16}
          style={{ color: "var(--theme-sys-on-surface-variant)" }}
        >
          Подзаголовок
        </Body>
        <Body
          size="medium"
          mb={16}
          style={{ color: "var(--theme-sys-on-surface-variant)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Body>
        <Box style={{ display: "flex", "justify-content": "flex-end" }}>
          <Button variant="outlined" mr={8}>
            Кнопка
          </Button>
          <Button variant="filled">Кнопка</Button>
        </Box>
      </Box>
    </>
  ),
} as CardProps;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  style: { width: "360px" },
  children: (
    <>
      <Box
        pl={16}
        p={12}
        pr={4}
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        <Box style={{ flex: "1", display: "flex", "align-items": "center" }}>
          <Box
            style={{
              background: "var(--theme-sys-primary)",
              color: "var(--theme-sys-on-primary)",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
            }}
            shape="full"
            w={40}
            h={40}
            mr={16}
          >
            <Title size="medium">А</Title>
          </Box>
          <Box style={{ color: "var(--theme-sys-on-surface)" }}>
            <Title size="medium">Заголовок</Title>
            <Body size="medium">Подзаголовок</Body>
          </Box>
        </Box>
        <IconButton variant="standard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-dots-vertical"
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="12" cy="5" r="1" />
          </svg>
        </IconButton>
      </Box>
      <Box
        style={{
          background: "var(--theme-sys-surface-3)",
          "aspect-ratio": "16 / 9",
        }}
      />
      <Box p={16}>
        <Body size="large" style={{ color: "var(--theme-sys-on-surface)" }}>
          Заголовок
        </Body>
        <Body
          size="medium"
          mb={16}
          style={{ color: "var(--theme-sys-on-surface-variant)" }}
        >
          Подзаголовок
        </Body>
        <Body
          size="medium"
          mb={16}
          style={{ color: "var(--theme-sys-on-surface-variant)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Body>
        <Box style={{ display: "flex", "justify-content": "flex-end" }}>
          <Button variant="outlined" mr={8}>
            Кнопка
          </Button>
          <Button variant="filled">Кнопка</Button>
        </Box>
      </Box>
    </>
  ),
} as CardProps;

export const Elevated = Template.bind({});
Elevated.args = {
  variant: "elevated",
  style: { width: "360px" },
  children: (
    <>
      <Box
        pl={16}
        p={12}
        pr={4}
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        <Box style={{ flex: "1", display: "flex", "align-items": "center" }}>
          <Box
            style={{
              background: "var(--theme-sys-primary)",
              color: "var(--theme-sys-on-primary)",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
            }}
            shape="full"
            w={40}
            h={40}
            mr={16}
          >
            <Title size="medium">А</Title>
          </Box>
          <Box style={{ color: "var(--theme-sys-on-surface)" }}>
            <Title size="medium">Заголовок</Title>
            <Body size="medium">Подзаголовок</Body>
          </Box>
        </Box>
        <IconButton variant="standard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-dots-vertical"
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="12" cy="5" r="1" />
          </svg>
        </IconButton>
      </Box>
      <Box
        style={{
          background: "var(--theme-sys-surface-3)",
          "aspect-ratio": "16 / 9",
        }}
      />
      <Box p={16}>
        <Body size="large" style={{ color: "var(--theme-sys-on-surface)" }}>
          Заголовок
        </Body>
        <Body
          size="medium"
          mb={16}
          style={{ color: "var(--theme-sys-on-surface-variant)" }}
        >
          Подзаголовок
        </Body>
        <Body
          size="medium"
          mb={16}
          style={{ color: "var(--theme-sys-on-surface-variant)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Body>
        <Box style={{ display: "flex", "justify-content": "flex-end" }}>
          <Button variant="outlined" mr={8}>
            Кнопка
          </Button>
          <Button variant="filled">Кнопка</Button>
        </Box>
      </Box>
    </>
  ),
} as CardProps;
