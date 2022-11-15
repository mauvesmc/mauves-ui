import {
  Component,
  createContext,
  createEffect,
  createMemo,
  Match,
  mergeProps,
  Switch,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import { cssFromTheme } from "../../lib/cssFromTheme";
import { defaultTheme } from "../../lib/defaultTheme";
import { Theme } from "../../types/theme";

type ThemeContextType = [
  { theme: Theme },
  {
    setTheme: (current: "light" | "dark" | string) => void;
    setConfig: (config: Theme) => void;
  }
];

export const ThemeContext = createContext<ThemeContextType>([
  { theme: defaultTheme },
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
  config?: Theme;
  current?: "light" | "dark" | string;
  target?: HTMLElement | null;
}> = (rawProps) => {
  const props = mergeProps(
    {
      config: defaultTheme,
      current: defaultTheme.current,
      target:
        typeof window !== "undefined" ? document.documentElement : undefined,
    },
    rawProps
  );
  const [state, setState] = createStore({
    theme: { ...props.config, current: props.current },
  });
  const store: ThemeContextType = [
    state,
    {
      setTheme(current) {
        setState("theme", (t) => ({ ...t, current }));
      },
      setConfig(config) {
        setState("theme", () => config);
      },
    },
  ];
  const css = createMemo(() => cssFromTheme(state.theme));

  createEffect(() => {
    if (!props.target) return;
    props.target.setAttribute("style", css());
    props.target.setAttribute("data-theme", state.theme.current);
  });

  return (
    <ThemeContext.Provider value={store}>
      <Switch>
        <Match when={props.target}>{props.children}</Match>
        <Match when={!props.target}>
          <div style={css()} data-theme={state.theme.current}>
            {props.children}
          </div>
        </Match>
      </Switch>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useTheme = () => {
  const [store] = useThemeContext();

  return store.theme;
};

export const useCurrentTheme = () => {
  const theme = useTheme();

  return theme.palettes[theme.current];
};
