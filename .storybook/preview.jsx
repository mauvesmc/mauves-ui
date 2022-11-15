import { render } from "solid-js/web";
import { ThemeProvider } from "../src/context/ThemeProvider";
import "../src/styles/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

let disposeStory;

export const decorators = [
  (Story, ctx) => {
    if (disposeStory) {
      disposeStory();
    }

    const root = document.getElementById("root");
    const solidRoot = document.createElement("div");

    const theme = ctx.globals.theme;

    solidRoot.setAttribute("id", "solid-root");
    root.appendChild(solidRoot);

    render(
      <ThemeProvider current={theme} target={document.body}>
        <Story />
      </ThemeProvider>,
      solidRoot
    );

    return solidRoot;
    // return createRoot(() => Story()); // do not work correctly https://github.com/solidjs/solid/issues/553
  },
];

export const globalTypes = {
  theme: {
    name: "Тема",
    description: "Глобальная тема для компонентов",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Светлая", left: "🌞" },
        { value: "dark", title: "Темная", left: "🌚" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
