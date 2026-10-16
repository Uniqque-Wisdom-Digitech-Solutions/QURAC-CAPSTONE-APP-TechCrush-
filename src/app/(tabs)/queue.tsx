import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../../styles/main';

// Zustand store import
import { useAppStore } from '../../store/useAppStore';

export default function PatientQueueScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Pull live patients data and actions from Zustand store
  const patients = useAppStore((state) => state.patients);
  const setSelectedPatient = useAppStore((state) => state.setSelectedPatient);

  // Filter patients based on search input (name or ID)
  const filteredQueue = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView style={mainStyles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Top Brand Header */}
        <View style={mainStyles.brandHeaderRow}>
          <View>
            <Image 
              source={require('../../../assets/images/qurac-logo.png')} 
              style={{ width: 110, height: 32, resizeMode: 'contain' }} 
            />
            <Text style={mainStyles.brandRoleText}>Nurse</Text>
          </View>
          <View style={mainStyles.sectionActionLinkContainer}>
            <View style={{ position: 'relative', marginRight: 16 }}>
              <Ionicons name="notifications-outline" size={24} color="#063154" />
              <View style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, borderRadius: 4, backgroundColor: '#D32F2F' }} />
            </View>
            <View style={mainStyles.needsAttentionAvatarBox}>
              <Ionicons name="person" size={20} color="#2F9094" />
            </View>
          </View>
        </View>

        {/* Screen Title & Subtitle */}
        <Text style={mainStyles.greetingTitle}>Patient Queue</Text>
        <Text style={mainStyles.greetingSubtitle}>Manage patients waiting for triage.</Text>

        {/* 2x2 Metric Cards Grid (Dynamic from Zustand) */}
        <View style={mainStyles.queueGridContainer}>
          <View style={mainStyles.queueGridRow}>
            
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>All Patients</Text>
                  <Text style={mainStyles.queueMetricValue}>{patients.length}</Text>
                </View>
                <MaterialCommunityIcons name="account-group" size={20} color="#063154" />
              </View>
            </View>

            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Awaiting Triage</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#D32F2F' }]}>
                    {patients.filter((p) => p.status === 'Upcoming').length}
                  </Text>
                </View>
                <Ionicons name="time-outline" size={20} color="#D32F2F" />
              </View>
            </View>

          </View>

          <View style={mainStyles.queueGridRow}>
            
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>In Triage</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#2F9094' }]}>
                    {patients.filter((p) => p.status === 'Needs Attention' || p.status === 'Active').length}
                  </Text>
                </View>
                <Ionicons name="pulse" size={20} color="#2F9094" />
              </View>
            </View>

            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Ready to Doctor</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#00796B' }]}>1</Text>
                </View>
                <Ionicons name="checkmark-circle-outline" size={20} color="#00796B" />
              </View>
            </View>

          </View>
        </View>

        {/* Search Bar */}
        <View style={mainStyles.searchBarContainer}>
          <Ionicons name="search-outline" size={18} color="#666666" />
          <TextInput 
            style={mainStyles.searchBarInput}
            placeholder="Search patient by name, ID or phone number..."
            placeholderTextColor="#999999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Dynamically Rendered Queue List from Zustand */}
        {filteredQueue.map((patient) => {
          // Determine dynamic color scheme based on patient status
          const isNeedsAttention = patient.status === 'Needs Attention';
          const isActive = patient.status === 'Active';

          const badgeBg = isNeedsAttention ? '#FFEBEE' : isActive ? '#E0F2F1' : '#FFF9C4';
          const badgeColor = isNeedsAttention ? '#D32F2F' : isActive ? '#00796B' : '#F57F17';

          return (
            <View key={patient.id} style={mainStyles.patientCardContainer}>
              <View style={mainStyles.patientCardHeaderRow}>
                <View style={mainStyles.patientCardLeftSection}>
                  <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                    <Text style={mainStyles.needsAttentionAvatarText}>{patient.avatarText}</Text>
                  </View>
                  <View style={mainStyles.patientCardDetails}>
                    <Text style={mainStyles.needsAttentionPatientName}>{patient.name}</Text>
                    <Text style={mainStyles.needsAttentionPatientSubText}>
                      {patient.id} • {patient.gender}
                    </Text>
                    
                    {/* Dynamic Color-Coded Status Badge */}
                    <View style={{ marginTop: 4, alignSelf: 'flex-start' }}>
                      <View style={{ backgroundColor: badgeBg, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4 }}>
                        <Text style={{ color: badgeColor, fontSize: 10, fontWeight: 'bold' }}>
                          {patient.status}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* View button now routes directly to clinical triage details */}
                <TouchableOpacity 
                  style={mainStyles.compactOutlineButton}
                  onPress={() => {
                    setSelectedPatient(patient.id);
                    router.push('/patient-details');
                  }}
                >
                  <Text style={mainStyles.compactOutlineButtonText}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

      </ScrollView>
    </SafeAreaView>
  );
}