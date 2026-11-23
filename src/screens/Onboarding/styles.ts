import { StyleSheet } from "react-native";

import type { AppTheme } from "@/theme";

export function createStyles({
  colors,
  radius,
  spacing,
  typography,
}: AppTheme) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
}
