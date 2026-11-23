import { StyleSheet } from "react-native";

import { theme } from "@/theme";

const { colors, radius, spacing, typography } = theme;

export const styles = StyleSheet.create({
  field: {
    gap: spacing.sm,
  },
  label: {
    color: colors.text,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
  },
  input: {
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceElevated,
    color: colors.text,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.md,
  },
  inputError: {
    borderColor: colors.expense,
  },
  error: {
    color: colors.expense,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.sm,
  },
});
