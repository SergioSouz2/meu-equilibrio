import { Text, TextInput, View, type TextInputProps } from "react-native";

import { theme } from "@/theme";

import { styles } from "./styles";

type FormTextFieldProps = Omit<TextInputProps, "style" | "multiline"> & {
  label: string;
  error?: string;
};

export default function FormTextField({
  label,
  error,
  ...inputProps
}: FormTextFieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        accessibilityLabel={label}
        accessibilityHint={error}
        placeholderTextColor={theme.colors.textSecondary}
        selectionColor={theme.colors.primary}
        {...inputProps}
        style={[styles.input, error ? styles.inputError : undefined]}
      />

      {error ? (
        <Text
          accessibilityRole="alert"
          accessibilityLiveRegion="polite"
          style={styles.error}
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
}
