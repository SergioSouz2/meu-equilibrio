import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import OnboardingSlide, {
  type OnboardingStep,
} from "@/components/OnboardingSlide/OnboardingSlide";
import { useSafeArea } from "@/hooks/useSafeArea";

import { styles } from "./styles";

const steps: OnboardingStep[] = [
  {
    image: require("../../assets/financas.png"),
    title: "Veja para onde vai seu dinheiro",
    description:
      "Reúna suas receitas e despesas e acompanhe quanto sobra no mês.",
  },
  {
    image: require("../../assets/controle.png"),
    title: "Acompanhe seus gastos",
    description:
      "Registre suas compras e veja quais despesas mais pesam no orçamento.",
  },
  {
    image: require("../../assets/metas.png"),
    title: "Planeje suas metas",
    description:
      "Defina quanto quer guardar e acompanhe seu progresso mês a mês.",
  },
];

const lastStepIndex = steps.length - 1;

export default function OnboardingScreen() {
  const [stepIndex, setStepIndex] = useState(0);
  const safeAreaPadding = useSafeArea();

  return (
    <View style={[styles.screen, safeAreaPadding]}>
      <ScrollView contentContainerStyle={styles.content}>
        <OnboardingSlide step={steps[stepIndex]} />

        <View style={styles.footer}>
          <Text accessibilityLiveRegion="polite" style={styles.progress}>
            Etapa {stepIndex + 1} de {steps.length}
          </Text>

          {stepIndex < lastStepIndex && (
            <Pressable
              accessibilityRole="button"
              onPress={() =>
                setStepIndex((current) => Math.min(current + 1, lastStepIndex))
              }
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.primaryButtonText}>Continuar</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
