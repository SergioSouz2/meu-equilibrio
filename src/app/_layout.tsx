import { Stack } from "expo-router";

import DatabaseGate from "@/database/DatabaseGate";

export default function RootLayout() {
  return (
    <DatabaseGate>
      <Stack screenOptions={{ headerShown: false }} />
    </DatabaseGate>
  );
}
