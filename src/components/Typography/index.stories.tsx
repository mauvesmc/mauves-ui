import { Meta, StoryFn } from "@storybook/html"
import { Typography, TypographyProps } from "."

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Typography",
  parameters: {
    docs: {
      description: "Компонент для текста",
    },
  },
  argTypes: {
    variant: {
      name: "variant",
      type: "string",
      defaultValue: "bodyLarge",
      description: "Вариант типографии",
      control: {
        type: "select",
        options: [
          "displayLarge",
          "displayMedium",
          "displaySmall",
          "headlineLarge",
          "headlineMedium",
          "headlineSmall",
          "titleLarge",
          "titleMedium",
          "titleSmall",
          "labelLarge",
          "labelMedium",
          "labelSmall",
          "bodyLarge",
          "bodyMedium",
          "bodySmall",
        ],
      },
    },
    as: {
      name: "as",
      type: "string",
      description: "Компонент для ренедеринга",
      defaultValue: "p",
    },
    children: {
      name: "w",
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
} as Meta<TypographyProps>

const Template = ((args: TypographyProps) => (
  <Typography {...args} />
)) as StoryFn<TypographyProps>

export const Default = Template.bind({})
Default.args = {
  children: "Я большой текст",
} as TypographyProps

export const DisplayLarge = Template.bind({})
DisplayLarge.args = {
  variant: "displayLarge",
  children: "Display Large - 57/64 . 0",
} as TypographyProps

export const DisplayMedium = Template.bind({})
DisplayMedium.args = {
  variant: "displayMedium",
  children: "Display Medium - 45/52 .  0",
} as TypographyProps

export const DisplaySmall = Template.bind({})
DisplaySmall.args = {
  variant: "displaySmall",
  children: "Display Small - 36/44 . 0",
} as TypographyProps

export const HeadlineLarge = Template.bind({})
HeadlineLarge.args = {
  variant: "headlineLarge",
  children: "Headline Large - 32/40 . 0",
} as TypographyProps

export const HeadlineMedium = Template.bind({})
HeadlineMedium.args = {
  variant: "headlineMedium",
  children: "Headline Medium - 28/36 . 0",
} as TypographyProps

export const HeadlineSmall = Template.bind({})
HeadlineSmall.args = {
  variant: "headlineSmall",
  children: "Headline Small - 24/32 . 0",
} as TypographyProps

export const TitleLarge = Template.bind({})
TitleLarge.args = {
  variant: "titleLarge",
  children: "Title Large - 22/28 . 0",
} as TypographyProps

export const TitleMedium = Template.bind({})
TitleMedium.args = {
  variant: "titleMedium",
  children: "Title Medium - 16/24 . +0.15",
} as TypographyProps

export const TitleSmall = Template.bind({})
TitleSmall.args = {
  variant: "titleSmall",
  children: "Title Small - 14/20 . +0.1",
} as TypographyProps

export const LabelLarge = Template.bind({})
LabelLarge.args = {
  variant: "labelLarge",
  children: "Label Large - 14/20 . +0.1",
} as TypographyProps

export const LabelMedium = Template.bind({})
LabelMedium.args = {
  variant: "labelMedium",
  children: "Label Medium - 12/16 . +0.5",
} as TypographyProps

export const LabelSmall = Template.bind({})
LabelSmall.args = {
  variant: "labelSmall",
  children: "Label Small - 11/16 . +0.5",
} as TypographyProps

export const BodyLarge = Template.bind({})
BodyLarge.args = {
  variant: "bodyLarge",
  children: "Body Large - 16/24 . +0.15",
} as TypographyProps

export const BodyMedium = Template.bind({})
BodyMedium.args = {
  variant: "bodyMedium",
  children: "Body Medium - 14/20 . +0.25",
} as TypographyProps

export const BodySmall = Template.bind({})
BodySmall.args = {
  variant: "bodySmall",
  children: "Body Small - 12/16 . +0.4",
} as TypographyProps
