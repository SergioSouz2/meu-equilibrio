import { StyleSheet } from "react-native";

import { theme } from "@/theme";

const { colors, spacing, typography } = theme;

export const styles = StyleSheet.create({
  slide: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.lg,
  },
  illustration: {
    width: "100%",
    maxWidth: 280,
  },
  copy: {
    gap: spacing.md,
  },
  title: {
    color: colors.text,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    textAlign: "center",
  },
  description: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.md,
    textAlign: "center",
  },
});
