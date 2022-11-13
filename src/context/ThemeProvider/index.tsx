import {
  Component,
  createContext,
  createEffect,
  createMemo,
  mergeProps,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import { cssFromTheme } from "../../lib/cssFromTheme";
import { defaultThemeConfig } from "../../lib/defaultTheme";
import { ThemeConfig, ThemeCurrent } from "../../types/theme";

type ThemeContextType = [
  { theme: ThemeConfig },
  {
    setTheme: (current: ThemeCurrent) => void;
    setConfig: (config: ThemeConfig) => void;
  }
];

export const ThemeContext = createContext<ThemeContextType>([
  { theme: defaultThemeConfig },
  {
    setTheme: (current) => {
      console.log("set theme to", JSON.stringify(current));
    },
    setConfig: (config) => {
      console.log("set config to", JSON.stringify(config));
    },
  },
]);

export const ThemeProvider: Component<{
  children: any;
  config?: ThemeConfig;
  current?: ThemeCurrent;
}> = (rawProps) => {
  const props = mergeProps(
    { config: defaultThemeConfig, current: defaultThemeConfig.current },
    rawProps
  );
  const [state, setState] = createStore({
    theme: { ...props.config, current: props.current },
  });
  const store: ThemeContextType = [
    state,
    {
      setTheme(current: ThemeCurrent) {
        setState("theme", (t) => ({ ...t, current }));
      },
      setConfig(config) {
        setState("theme", () => config);
      },
    },
  ];
  const css = createMemo(() => cssFromTheme(state.theme));

  createEffect(() => {
    if (!document) return;
    document.documentElement.setAttribute("style", css());
  });

  return (
    <ThemeContext.Provider value={store}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeConfig = () => {
  const [store] = useTheme();

  return store.theme;
};

export const useCurrentTheme = () => {
  const theme = useThemeConfig();

  return theme.current;
};
