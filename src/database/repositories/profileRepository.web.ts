const profileNameKey = "meu-equilibrio:profile-name";

export function readProfileName(): string | null {
  return window.localStorage.getItem(profileNameKey);
}

export function saveProfileName(name: string): void {
  window.localStorage.setItem(profileNameKey, name);
}
