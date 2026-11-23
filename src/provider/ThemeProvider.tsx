import { AppTheme, theme } from "@/theme";
import { createContext, type PropsWithChildren } from "react";

export const ThemeContext = createContext<AppTheme | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
