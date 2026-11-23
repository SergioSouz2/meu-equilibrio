import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import type { PropsWithChildren } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { theme } from "@/theme";

import migrations from "../../drizzle/migrations";
import { db } from "./index";

export default function DatabaseGate({ children }: PropsWithChildren) {
  const { success, error } = useMigrations(db, migrations);

  if (success) {
    return <>{children}</>;
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text accessibilityRole="alert" style={styles.message}>
          Não foi possível preparar o banco de dados. {error.message}
        </Text>
      ) : (
        <>
          <ActivityIndicator color={theme.colors.primary} />
          <Text accessibilityLiveRegion="polite" style={styles.message}>
            Preparando o banco de dados…
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    padding: theme.spacing.xxl,
    gap: theme.spacing.md,
  },
  message: {
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.md,
    textAlign: "center",
  },
});
