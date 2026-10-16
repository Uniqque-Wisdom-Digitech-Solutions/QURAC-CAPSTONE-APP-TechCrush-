import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types for your state
interface Patient {
  id: string;
  name: string;
  gender: string;
  status: string;
  avatarText: string;
  bloodPressure?: string;
  pulseRate?: string;
  temperature?: string;
  respiratoryRate?: string;
  oxygenSaturation?: string;
  weight?: string;
  height?: string;
  nursingNotes?: string;
  consciousness?: string;
  appearance?: string;
  painScore?: string;
  otherNotes?: string;
}

interface AppState {
  // Auth State
  userToken: string | null;
  userRole: string;
  isLoading: boolean;
  
  // Data State
  patients: Patient[];
  selectedPatientId: string | null;

  // Actions
  setToken: (token: string) => Promise<void>;
  loadToken: () => Promise<void>;
  logout: () => Promise<void>;
  setSelectedPatient: (id: string) => void;
  setPatients: (patients: Patient[]) => void;
  addPatient: (patientData: Omit<Patient, 'id' | 'avatarText'>) => void;
  updatePatient: (id: string, updatedFields: Partial<Patient>) => void;
}

export const useAppStore = create<AppState>((set) => ({
  userToken: null,
  userRole: 'Nurse',
  isLoading: true,
  patients: [
    { id: 'P-00505', name: 'Uniqque Wisdom', gender: 'Male', status: 'Active', avatarText: 'UW', bloodPressure: '120/80', pulseRate: '75' },
    { id: 'P-00506', name: 'Vermaelen Peter', gender: 'Male', status: 'Upcoming', avatarText: 'VP' },
    { id: 'P-00444', name: 'Kolade Praise', gender: 'Female', status: 'Upcoming', avatarText: 'KP' },
    { id: 'P-00419', name: 'Abdul Ololade', gender: 'Male', status: 'Active', avatarText: 'AO' },
    { id: 'P-00124', name: 'Sarah Ahmed', gender: 'Female', status: 'Needs Attention', avatarText: 'SA' },
    { id: 'P-00852', name: 'Grace Moses', gender: 'Female', status: 'Upcoming', avatarText: 'GM' },
    { id: 'P-00798', name: 'Chinedu Okon', gender: 'Male', status: 'Active', avatarText: 'CO' },
    { id: 'P-00456', name: 'Musa Ibrahim', gender: 'Male', status: 'Upcoming', avatarText: 'MI' },
  ],
  selectedPatientId: null,

  // Save JWT Token to AsyncStorage + Store
  setToken: async (token: string) => {
    await AsyncStorage.setItem('userToken', token);
    set({ userToken: token });
  },

  // Load JWT Token from AsyncStorage on App Startup
  loadToken: async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      set({ userToken: token, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  // Logout & Clear Token
  logout: async () => {
    await AsyncStorage.removeItem('userToken');
    set({ userToken: null });
  },

  setSelectedPatient: (id: string) => set({ selectedPatientId: id }),
  setPatients: (patients: Patient[]) => set({ patients }),

  // Add New Patient Action (Auto-generates ID & Avatar Initials)
  addPatient: (patientData) => {
    set((state) => {
      const newId = `P-00${Math.floor(100 + Math.random() * 900)}`;
      
      const nameParts = patientData.name.trim().split(' ');
      const avatarText = nameParts.length > 1 
        ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
        : `${nameParts[0][0]}X`.toUpperCase();

      const newEntry = {
        id: newId,
        avatarText,
        ...patientData,
      };

      return { patients: [newEntry, ...state.patients] };
    });
  },

  // Update Existing Patient Action (For Triage & Edits)
  updatePatient: (id, updatedFields) => {
    set((state) => ({
      patients: state.patients.map((p) => 
        p.id === id ? { ...p, ...updatedFields } : p
      ),
    }));
  },
}));