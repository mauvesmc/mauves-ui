import { useTheme } from "solid-styled-components";
import { ThemeConfig } from "../types/theme";

export const useThemeConfig = () => {
  return useTheme() as ThemeConfig;
};
