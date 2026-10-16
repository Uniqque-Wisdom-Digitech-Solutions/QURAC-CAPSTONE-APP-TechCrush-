import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../styles/main';

// Zustand store import
import { useAppStore } from '../store/useAppStore';

export default function AppointmentDetailsScreen() {
  const router = useRouter();

  // Pull selected patient ID and patients list from Zustand
  const patients = useAppStore((state) => state.patients);
  const selectedPatientId = useAppStore((state) => state.selectedPatientId);

  // Find the selected patient data or fallback to the first patient / default
  const patient = patients.find((p) => p.id === selectedPatientId) || patients[0] || {
    id: 'P-00123',
    name: 'Sarah Ahmed',
    gender: 'Female',
    avatarText: 'SA',
    status: 'Upcoming',
  };

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView style={mainStyles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Top Brand Header */}
        <View style={mainStyles.brandHeaderRow}>
          <View>
            <Image
              source={require("../../assets/images/qurac-logo.png")}
              style={{ width: 110, height: 32, resizeMode: "contain" }}
            />
            <Text style={mainStyles.brandRoleText}>Nurse</Text>
          </View>
          <View style={mainStyles.sectionActionLinkContainer}>
            <View style={{ position: "relative", marginRight: 16 }}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#063154"
              />
              <View
                style={{
                  position: "absolute",
                  top: -2,
                  right: -2,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "#D32F2F",
                }}
              />
            </View>
            <View style={mainStyles.needsAttentionAvatarBox}>
              <Ionicons name="person" size={20} color="#2F9094" />
            </View>
          </View>
        </View>

        {/* Back Navigation Link to Appointments */}
        <TouchableOpacity
          style={mainStyles.backNavigationRow}
          onPress={() => router.push("/(tabs)/appointments")}
        >
          <Ionicons name="chevron-back" size={16} color="#2F9094" />
          <Text style={mainStyles.backNavigationText}>Appointments</Text>
        </TouchableOpacity>

        {/* Screen Title */}
        <Text style={[mainStyles.greetingTitle, { marginBottom: 16 }]}>
          Appointment Details
        </Text>

        {/* Patient Summary Header Card */}
        <View style={mainStyles.patientDetailHeaderCard}>
          <View style={mainStyles.patientCardLeftSection}>
            <View
              style={[
                mainStyles.needsAttentionAvatarBox,
                {
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: "#E0F2F1",
                },
              ]}
            >
              <Text
                style={[mainStyles.needsAttentionAvatarText, { fontSize: 14 }]}
              >
                {patient.avatarText || 'SA'}
              </Text>
            </View>
            <View style={mainStyles.patientCardDetails}>
              <Text style={mainStyles.needsAttentionPatientName}>
                {patient.name}
              </Text>
              <Text style={mainStyles.needsAttentionPatientSubText}>
                Patient ID: {patient.id}
              </Text>
              <Text style={mainStyles.needsAttentionPatientSubText}>
                34 years • {patient.gender}
              </Text>
            </View>
          </View>

          <View style={mainStyles.badgeConfirmed}>
            <Text style={mainStyles.badgeConfirmedText}>
              Confirmed
            </Text>
          </View>
        </View>

        {/* Appointment Info Section */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="calendar-outline" size={18} color="#00796B" />
            <Text style={mainStyles.detailSectionTitle}>Appointment</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Date</Text>
            <Text style={mainStyles.detailDataValue}>Monday, 29 Sep 2026</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Visit Type</Text>
            <Text style={mainStyles.detailDataValue}>General Consultation</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Time</Text>
            <Text style={mainStyles.detailDataValue}>10:34 AM (12 min ago)</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Appointment Booked by</Text>
            <Text style={mainStyles.detailDataValue}>Patient</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Appointment Booking Date</Text>
            <Text style={mainStyles.detailDataValue}>25 Sep 2026</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Consulting Doctor</Text>
            <Text style={mainStyles.detailDataValue}>Dr. Joh Uzor</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Reason for visit</Text>
            <Text style={mainStyles.detailDataValue}>Headache and fever for 2 days</Text>
          </View>
        </View>

        {/* Patient Information Section */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="person-outline" size={18} color="#00796B" />
            <Text style={mainStyles.detailSectionTitle}>Patient Information</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Full name</Text>
            <Text style={mainStyles.detailDataValue}>{patient.name}</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Patient ID</Text>
            <Text style={mainStyles.detailDataValue}>{patient.id}</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Date of birth</Text>
            <Text style={mainStyles.detailDataValue}>12 May 1992 (34 years)</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Gender</Text>
            <Text style={mainStyles.detailDataValue}>{patient.gender}</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Phone number</Text>
            <Text style={mainStyles.detailDataValue}>0803 123 4567</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Email</Text>
            <Text style={mainStyles.detailDataValue}>{patient.name.toLowerCase().replace(/\s+/g, '')}@example.com</Text>
          </View>
        </View>

        {/* Bottom Action Buttons */}
        <View style={mainStyles.detailBottomButtonsRow}>
          <TouchableOpacity
            style={mainStyles.detailOutlineButton}
            onPress={() => router.push("/(tabs)/appointments")}
          >
            <Text style={mainStyles.detailOutlineButtonText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={mainStyles.detailPrimaryButton}
            onPress={() => router.push("/triage")}
          >
            <Text style={mainStyles.detailPrimaryButtonText}>Check In Patient</Text>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}