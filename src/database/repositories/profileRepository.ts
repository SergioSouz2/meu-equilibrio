import { eq } from "drizzle-orm";

import { db } from "@/database/index";
import { profiles } from "@/database/schema/profiles";

const localProfileId = 1;

export function readProfileName(): string | null {
  const profile = db
    .select({ name: profiles.name })
    .from(profiles)
    .where(eq(profiles.id, localProfileId))
    .get();

  return profile?.name ?? null;
}

export function saveProfileName(name: string): void {
  db.insert(profiles)
    .values({ id: localProfileId, name })
    .onConflictDoUpdate({
      target: profiles.id,
      set: { name },
    })
    .run();

  if (__DEV__) {
    console.log("[SQLite] Perfil salvo com sucesso.");
  }
}
