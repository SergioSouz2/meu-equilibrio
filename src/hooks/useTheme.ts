import { ThemeContext } from "@/provider/ThemeProvider";
import { AppTheme } from "@/theme";
import { useContext } from "react";

export function useTheme(): AppTheme {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider.");
  }

  return theme;
}
