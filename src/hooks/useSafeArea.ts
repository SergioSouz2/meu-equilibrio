import { useSafeAreaInsets } from "react-native-safe-area-context";

import { spacing } from "@/theme";

export function useSafeArea() {
  const insets = useSafeAreaInsets();

  return {
    paddingTop: insets.top,
    paddingRight: insets.right + spacing.xxl,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left + spacing.xxl,
  };
}
