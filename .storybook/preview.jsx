import { render } from "solid-js/web";
import { ThemeProvider } from "../src/context/ThemeProvider";
import "../src/styles/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// let disposeStory

export const decorators = [
  (Story) => {
    // if (disposeStory) {
    //   disposeStory()
    // }

    const root = document.getElementById("root");
    const solidRoot = document.createElement("div");

    solidRoot.setAttribute("id", "solid-root");
    root.appendChild(solidRoot);

    render(
      <ThemeProvider>
        <Story />
      </ThemeProvider>,
      solidRoot
    );

    return solidRoot;
    // return createRoot(() => Story()); // do not work correctly https://github.com/solidjs/solid/issues/553
  },
];
