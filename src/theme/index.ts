import { colors } from "./colors";
import { radius, spacing } from "./spacing";
import { typography } from "./typography";

export const theme = {
  colors,
  typography,
  spacing,
  radius,
} as const;

export type AppTheme = typeof theme;

export { colors, radius, spacing, typography };

