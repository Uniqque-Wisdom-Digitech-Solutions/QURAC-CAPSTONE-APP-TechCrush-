import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../../styles/main';

// Zustand store import
import { useAppStore } from '../../store/useAppStore';

export default function NurseHomeScreen() {
  const router = useRouter();

  // Pull live patients data and actions directly from Zustand
  const patients = useAppStore((state) => state.patients);
  const setSelectedPatient = useAppStore((state) => state.setSelectedPatient);

  // Filter 1: "Needs Attention" card section shows strictly 'Needs Attention'
  const needsAttentionList = patients.filter((p) => p.status === 'Needs Attention');

  // Filter 2: "Upcoming Appointments" card section shows strictly 'Upcoming'
  const upcomingList = patients.filter((p) => p.status === 'Upcoming');

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView style={mainStyles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* Top Brand Header */}
        <View style={mainStyles.brandHeaderRow}>
          <View>
            <Image 
              source={require('../../../assets/images/qurac-logo.png')} 
              style={{ width: 110, height: 32, resizeMode: 'contain' }} 
            />
            <Text style={mainStyles.brandRoleText}>Nurse</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ position: 'relative', marginRight: 16 }}>
              <Ionicons name="notifications-outline" size={24} color="#063154" />
              <View style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, borderRadius: 4, backgroundColor: '#D32F2F' }} />
            </View>
            <View style={mainStyles.needsAttentionAvatarBox}>
              <Ionicons name="person" size={20} color="#2F9094" />
            </View>
          </View>
        </View>

        {/* Greeting Section */}
        <Text style={mainStyles.greetingTitle}>Good morning, Nurse Uniqque</Text>
        <Text style={mainStyles.greetingSubtitle}>Here's what's happening in the clinic today.</Text>

        {/* Appointments Banner */}
        <View style={mainStyles.appointmentsBannerCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={mainStyles.appointmentsBannerTitle}>Appointments</Text>
              <Text style={mainStyles.appointmentsBannerCount}>{patients.length}</Text>
              <TouchableOpacity onPress={() => router.push('/(tabs)/patients')}>
                <Text style={mainStyles.appointmentsBannerActionText}>View patients expected today →</Text>
              </TouchableOpacity>
            </View>
            <Ionicons name="calendar" size={32} color="#00796B" />
          </View>
        </View>

        {/* 4 Metric Cards Grid Row 1 */}
        <View style={mainStyles.metricGridRow}>
          <View style={[mainStyles.metricCard, mainStyles.metricCardLeftMargin]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View>
                <Text style={mainStyles.metricCardLabel}>Patient Waiting</Text>
                <Text style={mainStyles.metricValueWaiting}>
                  {patients.filter((p) => p.status === 'Needs Attention').length}
                </Text>
              </View>
              <MaterialCommunityIcons name="account-group" size={20} color="#063154" />
            </View>
          </View>

          <View style={[mainStyles.metricCard, mainStyles.metricCardRightMargin]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View>
                <Text style={mainStyles.metricCardLabel}>Awaiting Triage</Text>
                <Text style={mainStyles.metricValueAwaitingTriage}>
                  {upcomingList.length}
                </Text>
              </View>
              <Ionicons name="time-outline" size={20} color="#D32F2F" />
            </View>
          </View>
        </View>

        {/* 4 Metric Cards Grid Row 2 */}
        <View style={mainStyles.metricGridRow}>
          <View style={[mainStyles.metricCard, mainStyles.metricCardLeftMargin]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View>
                <Text style={mainStyles.metricCardLabel}>In Triage</Text>
                <Text style={mainStyles.metricValueInTriage}>
                  {patients.filter((p) => p.status === 'Active' || p.status === 'Admission').length}
                </Text>
              </View>
              <Ionicons name="pulse" size={20} color="#00796B" />
            </View>
          </View>

          <View style={[mainStyles.metricCard, mainStyles.metricCardRightMargin]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View>
                <Text style={mainStyles.metricCardLabel}>Ready to Doctor</Text>
                <Text style={mainStyles.metricValueReadyToDoctor}>1</Text>
              </View>
              <Ionicons name="checkmark-circle-outline" size={20} color="#2E7D32" />
            </View>
          </View>
        </View>

        {/* Needs Attention Section Header */}
        <View style={mainStyles.sectionHeaderRow}>
          <Text style={mainStyles.sectionTitleText}>Needs attention</Text>
          <TouchableOpacity 
            style={mainStyles.sectionActionLinkContainer}
            onPress={() => router.push('/(tabs)/queue')}
          >
            <Text style={mainStyles.sectionActionLinkText}>View queue</Text>
            <Ionicons name="arrow-forward" size={14} color="#2F9094" />
          </TouchableOpacity>
        </View>

        {/* Dynamically Rendered Needs Attention Cards */}
        {needsAttentionList.map((rawPatient) => {
          const patient: any = rawPatient;
          return (
            <View key={patient.id} style={mainStyles.needsAttentionCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={mainStyles.needsAttentionAvatarBox}>
                    <Text style={mainStyles.needsAttentionAvatarText}>{patient.avatarText}</Text>
                  </View>
                  <View>
                    <Text style={mainStyles.needsAttentionPatientName}>{patient.name}</Text>
                    <Text style={mainStyles.needsAttentionPatientSubText}>
                      {patient.id} • {patient.gender}
                    </Text>
                  </View>
                </View>
                <View style={{ backgroundColor: '#FFEBEE', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>
                  <Text style={{ color: '#D32F2F', fontSize: 10, fontWeight: 'bold' }}>High</Text>
                </View>
              </View>
              <Text style={mainStyles.needsAttentionStatusText}>{patient.status}</Text>
              
              <TouchableOpacity 
                style={mainStyles.needsAttentionContinueButton}
                onPress={() => {
                  setSelectedPatient(patient.id);
                  router.push({
                    pathname: '/triage',
                    params: { id: patient.id },
                  });
                }}
              >
                <Text style={mainStyles.needsAttentionContinueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        {/* Upcoming Appointments Section Header */}
        <View style={mainStyles.sectionHeaderRow}>
          <Text style={mainStyles.sectionTitleText}>Upcoming appointments</Text>
          <TouchableOpacity 
            style={mainStyles.sectionActionLinkContainer}
            onPress={() => router.push('/(tabs)/patients')}
          >
            <Text style={mainStyles.sectionActionLinkText}>View all</Text>
            <Ionicons name="arrow-forward" size={14} color="#2F9094" />
          </TouchableOpacity>
        </View>

        {/* Dynamically Rendered Upcoming Appointment Cards */}
        {upcomingList.map((rawPatient) => {
          const patient: any = rawPatient;
          return (
            <View key={patient.id} style={mainStyles.upcomingAppointmentCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={mainStyles.needsAttentionAvatarBox}>
                    <Text style={mainStyles.needsAttentionAvatarText}>{patient.avatarText}</Text>
                  </View>
                  <View>
                    <Text style={mainStyles.needsAttentionPatientName}>{patient.name}</Text>
                    <Text style={mainStyles.needsAttentionPatientSubText}>
                      {patient.id} • {patient.gender}
                    </Text>
                  </View>
                </View>
                <Text style={mainStyles.upcomingAppointmentTimeText}>
                  {patient.appointmentTime || "09:00 AM"}
                </Text>
              </View>
            </View>
          );
        })}

      </ScrollView>
    </SafeAreaView>
  );
}