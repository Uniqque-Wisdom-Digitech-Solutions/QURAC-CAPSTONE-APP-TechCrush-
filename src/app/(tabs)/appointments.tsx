import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../../styles/main';

// Zustand store import
import { useAppStore } from '../../store/useAppStore';

export default function AppointmentsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Pull live patients data and actions directly from Zustand
  const patients = useAppStore((state) => state.patients);
  const setSelectedPatient = useAppStore((state) => state.setSelectedPatient);

  // Filter appointments list dynamically based on search input
  const filteredAppointments = patients.filter(
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
        <Text style={mainStyles.greetingTitle}>Appointments</Text>
        <Text style={mainStyles.greetingSubtitle}>View today's and upcoming patient appointments.</Text>

        {/* Top Total Appointments Banner (Dynamic from Zustand) */}
        <View style={mainStyles.appointmentsBannerCardSolid}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="calendar-clock" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text style={mainStyles.appointmentsBannerTitleSolid}>Appointments</Text>
          </View>
          <Text style={mainStyles.appointmentsBannerCountSolid}>{patients.length}</Text>
        </View>

        {/* 2x2 Metric Cards Grid (Dynamic counts based on live status) */}
        <View style={mainStyles.queueGridContainer}>
          <View style={mainStyles.queueGridRow}>
            
            {/* Card 1: Confirmed */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Confirmed</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>
                    {patients.filter((p) => p.status === 'Needs Attention' || p.status === 'Active').length}
                  </Text>
                </View>
                <MaterialCommunityIcons name="account-group-outline" size={20} color="#2F9094" />
              </View>
            </View>

            {/* Card 2: Checked In */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Checked In</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>
                    {patients.filter((p) => p.status === 'Active').length}
                  </Text>
                </View>
                <Ionicons name="time-outline" size={20} color="#2F9094" />
              </View>
            </View>

          </View>

          <View style={mainStyles.queueGridRow}>
            
            {/* Card 3: Pending / Upcoming */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Pending</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>
                    {patients.filter((p) => p.status === 'Upcoming').length}
                  </Text>
                </View>
                <Ionicons name="pulse-outline" size={20} color="#2F9094" />
              </View>
            </View>

            {/* Card 4: Cancelled */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Cancelled</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>0</Text>
                </View>
                <Ionicons name="time-outline" size={20} color="#2F9094" />
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

        {/* Dynamically Rendered Appointment Cards */}
        {filteredAppointments.map((patient, index) => {
          // Dynamic appointment badge mappings using safe fallback styles
          let badgeText = 'Confirmed';
          let badgeStyle = mainStyles.badgeConfirmed;
          let badgeTextStyle = mainStyles.badgeConfirmedText;

          if (patient.status === 'Upcoming') {
            badgeText = 'Pending';
          } else if (patient.status === 'Active') {
            badgeText = 'Checked In';
          }

          // Mock slot time generation for presentation display
          const times = ['09:00 AM', '10:00 AM', '10:30 AM', '11:45 AM', '01:15 PM', '02:30 PM'];
          const appointmentTime = times[index % times.length];

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
                      {patient.id} • {appointmentTime}
                    </Text>
                    
                    <View style={mainStyles.patientCardBadgeRow}>
                      <View style={badgeStyle}>
                        <Text style={badgeTextStyle}>{badgeText}</Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* Now routes correctly to appointment details review screen */}
                <TouchableOpacity 
                  style={mainStyles.compactOutlineButton}
                  onPress={() => {
                    setSelectedPatient(patient.id);
                    router.push('/appointment-details');
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