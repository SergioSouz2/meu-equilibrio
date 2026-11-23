import { theme } from "@/theme";
import { Text, View } from "react-native";
import { createStyles } from "./styles";

export default function OnboardingScreen() {
  const styles = createStyles(theme);

  return (
    <View style={styles.screen}>
      <Text>OnboardingScreen</Text>
    </View>
  );
}
