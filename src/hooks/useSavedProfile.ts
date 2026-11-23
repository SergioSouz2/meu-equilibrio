import { useCallback, useEffect, useState } from "react";

import { readProfileName } from "@/database/repositories/profileRepository";

type SavedProfileState =
  | { status: "loading" }
  | { status: "ready"; name: string | null }
  | { status: "error" };

export function useSavedProfile() {
  const [profile, setProfile] = useState<SavedProfileState>({
    status: "loading",
  });

  const reload = useCallback(() => {
    try {
      setProfile({ status: "ready", name: readProfileName() });
    } catch {
      setProfile({ status: "error" });
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return { profile, reload };
}
