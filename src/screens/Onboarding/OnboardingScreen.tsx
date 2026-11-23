import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import OnboardingSlide, {
  type OnboardingStep,
} from "@/components/OnboardingSlide/OnboardingSlide";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
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
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const safeAreaPadding = useSafeArea();
  const isLastStep = stepIndex === lastStepIndex;

  function handleContinue() {
    if (isLastStep) {
      router.replace("/cadastro-perfil");
      return;
    }

    setStepIndex((current) => Math.min(current + 1, lastStepIndex));
  }

  return (
    <View style={[styles.screen, safeAreaPadding]}>
      <ScrollView contentContainerStyle={styles.content}>
        <OnboardingSlide step={steps[stepIndex]} />

        <View style={styles.footer}>
          <Text accessibilityLiveRegion="polite" style={styles.progress}>
            Etapa {stepIndex + 1} de {steps.length}
          </Text>

          <PrimaryButton
            label={isLastStep ? "Começar" : "Continuar"}
            onPress={handleContinue}
          />
        </View>
      </ScrollView>
    </View>
  );
}
