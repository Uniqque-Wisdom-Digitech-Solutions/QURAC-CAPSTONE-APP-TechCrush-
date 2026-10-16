import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
  registeredEmails: string[];

  signup: (email: string) => boolean;
  login: (email: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      email: null,
      registeredEmails: [],

      signup: (email: string) => {
        const normalizedEmail = email.trim().toLowerCase();

        const alreadyRegistered = get().registeredEmails.includes(normalizedEmail);

        if (alreadyRegistered) {
          return false; // Triggers "An account with this email already exists" in your UI
        }

        set({
          registeredEmails: [...get().registeredEmails, normalizedEmail],
          isAuthenticated: true,
          email: normalizedEmail,
        });

        return true;
      },

      login: (email: string) => {
        const normalizedEmail = email.trim().toLowerCase();

        const accountExists = get().registeredEmails.includes(normalizedEmail);

        if (!accountExists) {
          return false; // Triggers "No account found" error in your UI
        }

        set({
          isAuthenticated: true,
          email: normalizedEmail,
        });

        return true;
      },

      logout: () => {
        set({
          isAuthenticated: false,
          email: null,
        });
      },
    }),
    {
      name: 'qurac-auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        registeredEmails: state.registeredEmails,
        isAuthenticated: state.isAuthenticated,
        email: state.email,
      }),
    }
  )
);