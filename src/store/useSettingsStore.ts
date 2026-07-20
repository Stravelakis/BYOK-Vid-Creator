import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ApiKeys, BackendDefaults } from "./settingsTypes";

interface SettingsState {
  keys: ApiKeys;
  defaults: BackendDefaults;
  setKey: (k: keyof ApiKeys, v: string) => void;
  setDefault: <K extends keyof BackendDefaults>(
    k: K,
    v: BackendDefaults[K]
  ) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      keys: {
        azureSpeechKey: "",
        azureRegion: "",
        glmKey: "",
        pixabayKey: "",
        jamendoKey: "",
        freesoundKey: "",
      },
      defaults: {
        ttsPrimary: "coqui-xtts-v2",
        ttsFallback: "piper",
        llmScenePlanner: "glm-5.2",
        defaultTransition: "fade_zoom",
        storageTarget: "local",
      },
      setKey: (k, v) => set((s) => ({ keys: { ...s.keys, [k]: v } })),
      setDefault: (k, v) =>
        set((s) => ({ defaults: { ...s.defaults, [k]: v } })),
    }),
    { name: "byok-settings" } // saved to localStorage, survives restarts
  )
);
