import { useTheme } from "@/hooks/useTheme";
import { ThemeProvider } from "@/provider/ThemeProvider";
import {
  DarkTheme,
  ThemeProvider as NavigationThemeProvider,
  Stack,
} from "expo-router";
import { StatusBar } from "expo-status-bar";

function AppNavigator() {
  const { colors } = useTheme();

  const navigationTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      border: colors.border,
      notification: colors.danger,
    },
  };

  return (
    <NavigationThemeProvider value={navigationTheme}>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ title: "Meu Equilíbrio" }} />
      </Stack>
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
