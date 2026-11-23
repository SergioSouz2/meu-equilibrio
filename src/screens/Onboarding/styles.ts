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
});
