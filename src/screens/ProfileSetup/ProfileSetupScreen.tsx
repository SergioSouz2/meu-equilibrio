import { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import FormTextField from "@/components/FormTextField/FormTextField";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { saveProfileName } from "@/database/repositories/profileRepository";
import { useSafeArea } from "@/hooks/useSafeArea";
import { useSavedProfile } from "@/hooks/useSavedProfile";
import { theme } from "@/theme";

import { styles } from "./styles";

export default function ProfileSetupScreen() {
  const safeAreaPadding = useSafeArea();
  const { profile, reload } = useSavedProfile();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={[styles.screen, safeAreaPadding]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {profile.status === "loading" && (
          <ActivityIndicator
            accessibilityLabel="Carregando perfil"
            color={theme.colors.primary}
          />
        )}

        {profile.status === "error" && (
          <>
            <Text accessibilityRole="alert" style={styles.description}>
              Não foi possível carregar seu perfil.
            </Text>
            <PrimaryButton label="Tentar novamente" onPress={reload} />
          </>
        )}

        {profile.status === "ready" && (
          <ProfileForm initialName={profile.name} />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

type ProfileFormProps = {
  initialName: string | null;
};

function ProfileForm({ initialName }: ProfileFormProps) {
  const [name, setName] = useState(initialName ?? "");
  const [confirmedName, setConfirmedName] = useState(initialName);
  const [error, setError] = useState("");

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

    try {
      saveProfileName(trimmedName);
    } catch {
      setError("Não foi possível salvar seu nome. Tente novamente.");
      return;
    }

    Keyboard.dismiss();
    setName(trimmedName);
    setError("");
    setConfirmedName(trimmedName);
  }

  if (confirmedName) {
    return (
      <>
        <Text accessibilityRole="header" style={styles.title}>
          Olá, {confirmedName}!
        </Text>
        <PrimaryButton
          label="Editar nome"
          onPress={() => setConfirmedName(null)}
        />
      </>
    );
  }

  return (
    <>
      <Text accessibilityRole="header" style={styles.title}>
        Como podemos te chamar?
      </Text>

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
  );
}
