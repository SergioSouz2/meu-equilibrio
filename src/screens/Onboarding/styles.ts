import { StyleSheet } from "react-native";

import { theme } from "@/theme";

const { colors, radius, spacing, typography } = theme;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    alignSelf: "center",
    width: "100%",
    maxWidth: 480,
    paddingVertical: spacing.xxl,
    gap: spacing.xxxl,
  },
  footer: {
    gap: spacing.lg,
  },
  progress: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.sm,
    textAlign: "center",
  },
  primaryButton: {
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
  },
  primaryButtonText: {
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
