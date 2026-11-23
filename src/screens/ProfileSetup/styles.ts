import { StyleSheet } from "react-native";

import { theme } from "@/theme";

const { colors, spacing, typography } = theme;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    paddingVertical: spacing.xxxl,
    gap: spacing.md,
  },
  title: {
    color: colors.text,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
  },
  description: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.md,
  },
  form: {
    marginTop: spacing.lg,
    gap: spacing.xl,
  },
});
