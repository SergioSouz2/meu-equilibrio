import { Redirect } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { useSafeArea } from "@/hooks/useSafeArea";
import { useSavedProfile } from "@/hooks/useSavedProfile";
import OnboardingScreen from "@/screens/Onboarding/OnboardingScreen";
import { theme } from "@/theme";

export default function IndexRoute() {
  const safeAreaPadding = useSafeArea();
  const { profile, reload } = useSavedProfile();

  if (profile.status === "ready") {
    return profile.name ? (
      <Redirect href="/cadastro-perfil" />
    ) : (
      <OnboardingScreen />
    );
  }

  return (
    <View style={[styles.screen, safeAreaPadding]}>
      {profile.status === "error" ? (
        <>
          <Text accessibilityRole="alert" style={styles.message}>
            Não foi possível carregar seu perfil.
          </Text>
          <PrimaryButton label="Tentar novamente" onPress={reload} />
        </>
      ) : (
        <ActivityIndicator
          accessibilityLabel="Carregando perfil"
          color={theme.colors.primary}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    gap: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  message: {
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.md,
    textAlign: "center",
  },
});
