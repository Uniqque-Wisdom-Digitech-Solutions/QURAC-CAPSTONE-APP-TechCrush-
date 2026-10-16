import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // 1. Import router
import { mainStyles } from '../../../styles/main';

export default function PatientsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter(); // 2. Initialize router

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
        <Text style={mainStyles.greetingTitle}>Patients</Text>
        <Text style={mainStyles.greetingSubtitle}>Search and access patient information.</Text>

        {/* 2x2 Metric Cards Grid */}
        <View style={mainStyles.queueGridContainer}>
          <View style={mainStyles.queueGridRow}>
            
            {/* Card 1: Total Patients */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Total Patients</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>1248</Text>
                </View>
                <MaterialCommunityIcons name="account-group-outline" size={20} color="#2F9094" />
              </View>
            </View>

            {/* Card 2: Today's Visits */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Today's Visits</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>12</Text>
                </View>
                <Ionicons name="time-outline" size={20} color="#2F9094" />
              </View>
            </View>

          </View>

          <View style={mainStyles.queueGridRow}>
            
            {/* Card 3: Checked In */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Checked In</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>4</Text>
                </View>
                <Ionicons name="pulse-outline" size={20} color="#2F9094" />
              </View>
            </View>

            {/* Card 4: Upcoming */}
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Upcoming</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#063154' }]}>8</Text>
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

        {/* Section Title */}
        <Text style={[mainStyles.sectionTitleText, { marginBottom: 12 }]}>
          Patients <Text style={mainStyles.patientsListHeaderCount}>(1,248)</Text>
        </Text>

        {/* Patient 1: Sarah Ahmed */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>SA</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Sarah Ahmed</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00124 • Female</Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={mainStyles.badgeActiveVisit}>
                    <Text style={mainStyles.badgeActiveVisitText}>Active Visit</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* 3. Added onPress router handler */}
            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/full-patient-detail')}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Patient 2: Grace Moses */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>GM</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Grace Moses</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00852 • Female</Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={mainStyles.badgeUpcomingTag}>
                    <Text style={mainStyles.badgeUpcomingTagText}>Upcoming</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/full-patient-detail')}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Patient 3: Chinedu Okon */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>CO</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Chinedu Okon</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00798 • Male</Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={[mainStyles.badgeNoRecentVisit, { marginRight: 6 }]}>
                    <Text style={mainStyles.badgeNoRecentVisitText}>No Recent visit</Text>
                  </View>
                  <View style={mainStyles.badgeActiveTag}>
                    <Text style={mainStyles.badgeActiveTagText}>Active</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/full-patient-detail')}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Patient 4: Musa Ibrahim */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>MI</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Musa Ibrahim</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00456 • Male</Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={mainStyles.badgeUpcomingTag}>
                    <Text style={mainStyles.badgeUpcomingTagText}>Upcoming</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/full-patient-detail')}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}