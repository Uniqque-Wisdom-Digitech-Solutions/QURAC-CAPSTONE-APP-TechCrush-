import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../styles/main';
import { useAppStore } from './../store/useAppStore';

export default function AddPatientScreen() {
  const router = useRouter();
  const addPatient = useAppStore((state) => state.addPatient);

  // Form Local State
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Female');
  const [status, setStatus] = useState('Needs Attention');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      setErrorMessage('Please enter the patient full name.');
      return;
    }

    setErrorMessage('');

    // Save directly into Zustand global store
    addPatient({
      name: name.trim(),
      gender,
      status,
    });

    // Instantly navigate back to the patients directory
    router.back();
  };

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView style={mainStyles.container}>
        
        {/* Navigation Back Link */}
        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={16} color="#2F9094" style={{ marginRight: 2 }} />
          <Text style={{ color: '#2F9094', fontSize: 14, fontWeight: '600' }}>Back to Patients</Text>
        </TouchableOpacity>

        <Text style={mainStyles.greetingTitle}>Register New Patient</Text>
        <Text style={mainStyles.greetingSubtitle}>Enter patient clinical intake details.</Text>

        {/* Inline Error Banner if Name is Missing */}
        {errorMessage ? (
          <View style={{ backgroundColor: '#FFEBEE', padding: 10, borderRadius: 8, marginTop: 12, marginBottom: 4 }}>
            <Text style={{ color: '#D32F2F', fontSize: 13, fontWeight: '600' }}>{errorMessage}</Text>
          </View>
        ) : null}

        {/* Form Container Card */}
        <View style={[mainStyles.patientCardContainer, { marginTop: errorMessage ? 8 : 16 }]}>
          
          {/* Full Name Input */}
          <Text style={{ fontSize: 13, fontWeight: '600', color: '#063154', marginBottom: 6 }}>Full Name</Text>
          <TextInput 
            style={[mainStyles.searchBarInput, { borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, paddingHorizontal: 12, height: 44, marginBottom: 16 }]}
            placeholder="e.g. Chukwuma Okeke"
            placeholderTextColor="#999999"
            value={name}
            onChangeText={setName}
          />

          {/* Gender Selector */}
          <Text style={{ fontSize: 13, fontWeight: '600', color: '#063154', marginBottom: 6 }}>Gender</Text>
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            {['Female', 'Male'].map((item) => (
              <TouchableOpacity
                key={item}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  backgroundColor: gender === item ? '#2F9094' : '#F0F0F0',
                  borderRadius: 8,
                  alignItems: 'center',
                  marginRight: item === 'Female' ? 8 : 0,
                }}
                onPress={() => setGender(item)}
              >
                <Text style={{ color: gender === item ? '#FFFFFF' : '#666666', fontWeight: '600' }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Initial Visit Status Selector (Updated 'Active' to 'Admission') */}
          <Text style={{ fontSize: 13, fontWeight: '600', color: '#063154', marginBottom: 6 }}>Visit Status</Text>
          <View style={{ flexDirection: 'row', marginBottom: 24 }}>
            {['Needs Attention', 'Upcoming', 'Admission'].map((item) => (
              <TouchableOpacity
                key={item}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  backgroundColor: status === item ? '#063154' : '#F0F0F0',
                  borderRadius: 8,
                  alignItems: 'center',
                  marginRight: item !== 'Admission' ? 6 : 0,
                }}
                onPress={() => setStatus(item)}
              >
                <Text style={{ color: status === item ? '#FFFFFF' : '#666666', fontWeight: '600', fontSize: 11 }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Submit Action Button */}
          <TouchableOpacity 
            style={{ backgroundColor: '#2F9094', paddingVertical: 14, borderRadius: 8, alignItems: 'center' }}
            onPress={handleSubmit}
          >
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 }}>Save & Register Patient</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}