import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../styles/main';

export default function FullPatientDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView 
        style={mainStyles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Top Brand Header */}
        <View style={mainStyles.brandHeaderRow}>
          <View>
            <Image 
              source={require('../../assets/images/qurac-logo.png')} 
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

        {/* Back Link & Title */}
        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={16} color="#2F9094" style={{ marginRight: 2 }} />
          <Text style={{ color: '#2F9094', fontSize: 14, fontWeight: '600' }}>Patients</Text>
        </TouchableOpacity>

        <Text style={mainStyles.greetingTitle}>Patient Medical File</Text>
        <Text style={mainStyles.greetingSubtitle}>Complete clinical history and records.</Text>

        {/* Patient Profile Header Card */}
        <View style={[mainStyles.patientCardContainer, { marginTop: 8 }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1', width: 48, height: 48, borderRadius: 24 }]}>
                <Text style={[mainStyles.needsAttentionAvatarText, { fontSize: 16 }]}>SA</Text>
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text style={mainStyles.needsAttentionPatientName}>Sarah Ahmed</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>Patient ID: P-00123</Text>
                <Text style={[mainStyles.needsAttentionPatientSubText, { marginTop: 2 }]}>38 years • Female</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <View style={[mainStyles.badgeActiveVisit, { marginBottom: 4 }]}>
                <Text style={mainStyles.badgeActiveVisitText}>Active Visit</Text>
              </View>
              <Text style={{ fontSize: 11, color: '#666666' }}>General Consultation</Text>
            </View>
          </View>
        </View>

        {/* Section: Patient Information */}
        <View style={{ marginTop: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="person-outline" size={16} color="#2F9094" style={{ marginRight: 6 }} />
          <Text style={{ fontSize: 15, fontWeight: '700', color: '#063154' }}>Patient Information</Text>
        </View>

        <View style={mainStyles.patientCardContainer}>
          <View style={{ paddingVertical: 4 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
              <Text style={{ color: '#666666', fontSize: 13 }}>Full name</Text>
              <Text style={{ color: '#063154', fontSize: 13, fontWeight: '600' }}>Sarah Ahmed</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
              <Text style={{ color: '#666666', fontSize: 13 }}>Patient ID</Text>
              <Text style={{ color: '#063154', fontSize: 13, fontWeight: '600' }}>P-00123</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
              <Text style={{ color: '#666666', fontSize: 13 }}>Date of birth</Text>
              <Text style={{ color: '#063154', fontSize: 13, fontWeight: '600' }}>12 May 1992 (34 years)</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
              <Text style={{ color: '#666666', fontSize: 13 }}>Gender</Text>
              <Text style={{ color: '#063154', fontSize: 13, fontWeight: '600' }}>Female</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
              <Text style={{ color: '#666666', fontSize: 13 }}>Phone number</Text>
              <Text style={{ color: '#063154', fontSize: 13, fontWeight: '600' }}>0803 123 4567</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 }}>
              <Text style={{ color: '#666666', fontSize: 13 }}>Email</Text>
              <Text style={{ color: '#063154', fontSize: 13, fontWeight: '600' }}>Sarah.ahmed@example.com</Text>
            </View>
          </View>
        </View>

        {/* Section: Recent Vitals */}
        <View style={{ marginTop: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="pulse-outline" size={16} color="#2F9094" style={{ marginRight: 6 }} />
          <Text style={{ fontSize: 15, fontWeight: '700', color: '#063154' }}>Recent Vitals</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
          <View style={[mainStyles.queueGridCard, { flex: 1, marginRight: 6 }]}>
            <Text style={mainStyles.metricCardLabel}>BP</Text>
            <Text style={[mainStyles.queueMetricValue, { fontSize: 16, color: '#063154', marginTop: 4 }]}>128/84 mmHg</Text>
          </View>
          <View style={[mainStyles.queueGridCard, { flex: 1, marginLeft: 6 }]}>
            <Text style={mainStyles.metricCardLabel}>Pulse</Text>
            <Text style={[mainStyles.queueMetricValue, { fontSize: 16, color: '#063154', marginTop: 4 }]}>88 bpm</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
          <View style={[mainStyles.queueGridCard, { flex: 1, marginRight: 6 }]}>
            <Text style={mainStyles.metricCardLabel}>Temperature</Text>
            <Text style={[mainStyles.queueMetricValue, { fontSize: 16, color: '#063154', marginTop: 4 }]}>37.8 °C</Text>
          </View>
          <View style={[mainStyles.queueGridCard, { flex: 1, marginLeft: 6 }]}>
            <Text style={mainStyles.metricCardLabel}>Respiratory Rate</Text>
            <Text style={[mainStyles.queueMetricValue, { fontSize: 16, color: '#063154', marginTop: 4 }]}>20 /min</Text>
          </View>
        </View>

        {/* Section: Active Conditions */}
        <View style={{ marginTop: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="medical-bag" size={16} color="#2F9094" style={{ marginRight: 6 }} />
          <Text style={{ fontSize: 15, fontWeight: '700', color: '#063154' }}>Active Conditions</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 12 }}>
          <View style={{ backgroundColor: '#E0F2F1', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, marginRight: 8, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#00796B', fontSize: 12, fontWeight: '600', marginRight: 4 }}>Malaria</Text>
            <Ionicons name="information-circle-outline" size={14} color="#00796B" />
          </View>
          <View style={{ backgroundColor: '#E0F2F1', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#00796B', fontSize: 12, fontWeight: '600', marginRight: 4 }}>Acute febrile illness</Text>
            <Ionicons name="information-circle-outline" size={14} color="#00796B" />
          </View>
        </View>

        {/* Section: Allergies */}
        <View style={{ marginTop: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="alert-circle-outline" size={16} color="#2F9094" style={{ marginRight: 6 }} />
          <Text style={{ fontSize: 15, fontWeight: '700', color: '#063154' }}>Allergies</Text>
        </View>

        <View style={mainStyles.patientCardContainer}>
          <Text style={{ color: '#666666', fontSize: 13 }}>No known allergies</Text>
        </View>

        {/* Section: Current Visit */}
        <View style={{ marginTop: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="calendar-outline" size={16} color="#2F9094" style={{ marginRight: 6 }} />
          <Text style={{ fontSize: 15, fontWeight: '700', color: '#063154' }}>Current Visit</Text>
        </View>

        <View style={mainStyles.patientCardContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View style={{ alignItems: 'center', backgroundColor: '#F0F0F0', padding: 8, borderRadius: 8, marginRight: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#063154' }}>29</Text>
              <Text style={{ fontSize: 10, color: '#666666' }}>Sep 2026</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
                <View>
                  <Text style={{ fontSize: 11, color: '#666666' }}>Visit Type</Text>
                  <Text style={{ fontSize: 13, fontWeight: '600', color: '#063154' }}>General Consultation</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 11, color: '#666666' }}>Reason for Visit</Text>
                  <Text style={{ fontSize: 13, fontWeight: '600', color: '#063154' }}>Headache and fever for 2 days</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6, paddingTop: 6, borderTopWidth: 1, borderTopColor: '#F0F0F0', alignItems: 'center' }}>
                <View>
                  <Text style={{ fontSize: 11, color: '#666666' }}>Consulting Doctor</Text>
                  <Text style={{ fontSize: 12, fontWeight: '600', color: '#063154' }}>Dr. John Uzor</Text>
                </View>
                <View style={mainStyles.badgeCheckedIn}>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: '#00796B' }}>Checked in</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Section: Past Visits History */}
        <View style={{ marginTop: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="time-outline" size={16} color="#2F9094" style={{ marginRight: 6 }} />
          <Text style={{ fontSize: 15, fontWeight: '700', color: '#063154' }}>Past Visits History</Text>
        </View>

        <View style={mainStyles.patientCardContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' }}>
            <View>
              <Text style={{ fontSize: 13, fontWeight: '600', color: '#063154' }}>14 Aug 2026 • General Checkup</Text>
              <Text style={{ fontSize: 11, color: '#666666' }}>Attended by Dr. Sarah Jenkins</Text>
            </View>
            <Text style={{ fontSize: 12, color: '#2F9094', fontWeight: '600' }}>Completed</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6, paddingTop: 8 }}>
            <View>
              <Text style={{ fontSize: 13, fontWeight: '600', color: '#063154' }}>02 May 2026 • Lab Investigation</Text>
              <Text style={{ fontSize: 11, color: '#666666' }}>Attended by Dr. John Uzor</Text>
            </View>
            <Text style={{ fontSize: 12, color: '#2F9094', fontWeight: '600' }}>Completed</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}