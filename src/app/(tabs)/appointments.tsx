import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../../styles/main';

export default function AppointmentsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView style={mainStyles.container}>
        
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

        {/* Top Total Appointments Banner */}
        <View style={mainStyles.appointmentsBannerCardSolid}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="calendar-clock" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text style={mainStyles.appointmentsBannerTitleSolid}>Appointments</Text>
          </View>
          <Text style={mainStyles.appointmentsBannerCountSolid}>12</Text>
        </View>

        {/* 2x2 Metric Cards Grid */}
        <View style={mainStyles.queueGridContainer}>
          <View style={mainStyles.queueGridRow}>
            
            {/* Card 1: Confirmed */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Confirmed</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>5</Text>
                </View>
                <MaterialCommunityIcons name="account-group-outline" size={20} color="#2F9094" />
              </View>
            </View>

            {/* Card 2: Checked In */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Checked In</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>3</Text>
                </View>
                <Ionicons name="time-outline" size={20} color="#2F9094" />
              </View>
            </View>

          </View>

          <View style={mainStyles.queueGridRow}>
            
            {/* Card 3: Pending */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Pending</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>2</Text>
                </View>
                <Ionicons name="pulse-outline" size={20} color="#2F9094" />
              </View>
            </View>

            {/* Card 4: Cancelled */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Cancelled</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>1</Text>
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

        {/* Appointment 1: Sarah Ahmed */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>SA</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Sarah Ahmed</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00124 • 09:00 AM</Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={mainStyles.badgeConfirmed}>
                    <Text style={mainStyles.badgeConfirmedText}>Confirmed</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/appointment-details' as any)}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Appointment 2: Grace Moses */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>GM</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Grace Moses</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00852 • 10:00 AM</Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={mainStyles.badgePending}>
                    <Text style={mainStyles.badgePendingText}>Pending</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/appointment-details' as any)}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Appointment 3: Chinedu Okon */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>CO</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Chinedu Okon</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00798 • 10:30 AM</Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={mainStyles.badgeNoShow}>
                    <Text style={mainStyles.badgeNoShowText}>No Show</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/appointment-details' as any)}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Appointment 4: Musa Ibrahim */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>MI</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Musa Ibrahim</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00456 • 11:45 AM</Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={mainStyles.badgeCheckedIn}>
                    <Text style={mainStyles.badgeCheckedInText}>Checked In</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/appointment-details' as any)}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}