import { StyleSheet } from "react-native";

import { theme } from "@/theme";

const { colors, radius, spacing, typography } = theme;

export const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
  },
  label: {
    color: colors.background,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
