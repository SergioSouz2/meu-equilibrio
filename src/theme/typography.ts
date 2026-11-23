import { Platform } from "react-native";

export const typography = {
  fontFamily: Platform.select({
    ios: "System",
    android: "sans-serif",
    default: "System",
  }),

  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    display: 36,
  },

  weights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
} as const;
