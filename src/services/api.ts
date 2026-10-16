import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.qurac.com/v1';

const getHeaders = async (): Promise<Record<string, string>> => {
  const token = await AsyncStorage.getItem('userToken');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

export const ApiService = {
  // Fetch Patients List (Safely falls back to local state if backend is offline)
  getPatients: async (): Promise<any> => {
    try {
      const headers = await getHeaders();
      const response = await fetch(`${BASE_URL}/patients`, { headers });
      if (!response.ok) throw new Error('API request failed');
      return await response.json();
    } catch (error: unknown) {
      console.log('Using local mock state until backend is connected', error);
      return null;
    }
  },

  // Fetch Full Patient Medical Record
  getPatientDetails: async (patientId: string): Promise<any> => {
    try {
      const headers = await getHeaders();
      const response = await fetch(`${BASE_URL}/patients/${patientId}/full-profile`, { headers });
      if (!response.ok) throw new Error('API request failed');
      return await response.json();
    } catch (error: unknown) {
      console.log('Using static profile data', error);
      return null;
    }
  },
};