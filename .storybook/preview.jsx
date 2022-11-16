import { render } from "solid-js/web";
import { ThemeProvider } from "../src/context/ThemeProvider";
import { defaultTheme } from "../src/lib/defaultTheme";
import "../src/styles/index.scss";

const customViewports = Object.fromEntries(
  Object.entries({ ...defaultTheme.breakpoints, xs: 360 }).map(
    ([key, val], idx) => {
      return [
        key,
        {
          name: key,
          styles: {
            width: `${val}px`,
            height: `${Math.max((idx + 5) * 10, 60)}vh`,
          },
        },
      ];
    }
  )
);

export const parameters = {
  backgrounds: {
    disable: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
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
