import { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    View,
} from "react-native";

import FormTextField from "@/components/FormTextField/FormTextField";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { useSafeArea } from "@/hooks/useSafeArea";

import { styles } from "./styles";

export default function ProfileSetupScreen() {
  const safeAreaPadding = useSafeArea();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [confirmedName, setConfirmedName] = useState("");

  function handleNameChange(value: string) {
    setName(value);
    setError("");
  }

  function handleContinue() {
    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Informe seu nome ou apelido.");
      return;
    }

    Keyboard.dismiss();
    setError("");
    setConfirmedName(trimmedName);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={[styles.screen, safeAreaPadding]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text accessibilityRole="header" style={styles.title}>
          {confirmedName ? `Olá, ${confirmedName}!` : "Como podemos te chamar?"}
        </Text>

        {confirmedName ? (
          <PrimaryButton
            label="Editar nome"
            onPress={() => setConfirmedName("")}
          />
        ) : (
          <>
            <Text style={styles.description}>
              Use o nome ou apelido que você prefere ver no app.
            </Text>

            <View style={styles.form}>
              <FormTextField
                label="Nome ou apelido"
                placeholder="Ex.: Ana"
                value={name}
                error={error}
                onChangeText={handleNameChange}
                onSubmitEditing={handleContinue}
                autoCapitalize="words"
                autoComplete="name"
                maxLength={60}
                returnKeyType="done"
              />

              <PrimaryButton label="Continuar" onPress={handleContinue} />
            </View>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
