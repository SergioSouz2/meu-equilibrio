import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { colors, radius, spacing, typography } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          padding: spacing.xxl,
        },
      ]}
    >
      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
            borderRadius: radius.lg,
            padding: spacing.xl,
          },
        ]}
      >
        <Text
          accessibilityRole="header"
          style={{
            color: colors.text,
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.xxl,
            fontWeight: typography.weights.bold,
          }}
        >
          Meu Equilíbrio
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
  },
});
