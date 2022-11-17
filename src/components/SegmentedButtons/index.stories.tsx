import { Meta, StoryFn } from "@storybook/html";
import { createSignal } from "solid-js";
import { SegmentedButtons, SegmentedButtonsProps } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UI/Buttons/SegmentedButtons",
  parameters: {
    docs: {
      description: {
        component:
          "Сегментированные кнопки помогают людям выбирать параметры, переключать представления или сортировать элементы.<br/><br/>[Ссылка на Material You](https://m3.material.io/components/segmented-buttons/overview)",
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
    density: {
      name: "density",
      type: "number",
      description: "Стройность",
      defaultValue: 0,
      control: {
        type: "select",
        options: [0, -1, -2, -3],
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
  },
} as Meta<SegmentedButtonsProps>;

const Template = ((args: SegmentedButtonsProps) => {
  const [selected, setSelected] = createSignal<string[]>([]);

  const toggle = (item: string) => {
    setSelected((p) =>
      p.includes(item) ? p.filter((v) => v !== item) : [...p, item]
    );
  };

  return (
    <SegmentedButtons {...args}>
      <SegmentedButtons.Button
        icon={
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
        }
        selected={selected().includes("e1")}
        onClick={() => toggle("e1")}
      >
        Кнопка
      </SegmentedButtons.Button>
      <SegmentedButtons.Button
        icon={
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
        }
        selected={selected().includes("e2")}
        onClick={() => toggle("e2")}
      >
        Кнопка
      </SegmentedButtons.Button>
      <SegmentedButtons.Button
        icon={
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
        }
        disabled
        selected={selected().includes("e3")}
        onClick={() => toggle("e3")}
      >
        Кнопка
      </SegmentedButtons.Button>
      <SegmentedButtons.Button
        icon={
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
        }
        selected={selected().includes("e4")}
        onClick={() => toggle("e4")}
      >
        Очень большая кнопка
      </SegmentedButtons.Button>
    </SegmentedButtons>
  );
}) as StoryFn<SegmentedButtonsProps>;

export const Default = Template.bind({});
Default.args = {} as SegmentedButtonsProps;
