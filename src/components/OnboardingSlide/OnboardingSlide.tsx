import {
  Image,
  Text,
  View,
  useWindowDimensions,
  type ImageSourcePropType,
} from "react-native";

import { styles } from "./styles";

export type OnboardingStep = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

type OnboardingSlideProps = {
  step: OnboardingStep;
};

export default function OnboardingSlide({ step }: OnboardingSlideProps) {
  const { height: windowHeight } = useWindowDimensions();
  const illustrationHeight = Math.min(windowHeight * 0.25, 220);

  return (
    <View style={styles.slide}>
      <Image
        source={step.image}
        style={[styles.illustration, { height: illustrationHeight }]}
        resizeMode="contain"
        accessible={false}
      />

      <View style={styles.copy}>
        <Text accessibilityRole="header" style={styles.title}>
          {step.title}
        </Text>
        <Text style={styles.description}>{step.description}</Text>
      </View>
    </View>
  );
}
