import { useSafeArea } from "@/hooks/useSafeArea";
import { theme } from "@/theme";
import { Text, View } from "react-native";
import { createStyles } from "./styles";

export default function OnboardingScreen() {
  const styles = createStyles(theme);
  const safeAreaPadding = useSafeArea();

  return (
    <View style={[styles.screen, safeAreaPadding]}>
      <Text>OnboardingScreen</Text>
    </View>
  );
}
