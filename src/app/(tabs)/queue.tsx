import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../../styles/main';

export default function PatientQueueScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

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
        <Text style={mainStyles.greetingTitle}>Patient Queue</Text>
        <Text style={mainStyles.greetingSubtitle}>Manage patients waiting for triage.</Text>

        {/* 2x2 Metric Cards Grid */}
        <View style={mainStyles.queueGridContainer}>
          <View style={mainStyles.queueGridRow}>
            
            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>All Patients</Text>
                  <Text style={mainStyles.queueMetricValue}>5</Text>
                </View>
                <MaterialCommunityIcons name="account-group" size={20} color="#063154" />
              </View>
            </View>

            <View style={mainStyles.queueGridCard}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                  <Text style={mainStyles.metricCardLabel}>Awaiting Triage</Text>
                  <Text style={[mainStyles.queueMetricValue, { color: '#D32F2F' }]}>3</Text>
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
                  <Text style={[mainStyles.queueMetricValue, { color: '#2F9094' }]}>2</Text>
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

        {/* Patient 1: Amu Yusuf */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>AY</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Amu Yusuf</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00124 • <Text style={{ color: '#D32F2F', fontWeight: 'bold' }}>18 min waiting</Text></Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={[mainStyles.badgeHigh, { marginRight: 8 }]}>
                    <Text style={mainStyles.badgeHighText}>High</Text>
                  </View>
                  <Text style={mainStyles.statusReadyText}>Ready for Doctor</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/patient-details')}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Patient 2: Chinedu Okon */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#F0F0F0' }]}>
                <Text style={{ color: '#666', fontWeight: 'bold', fontSize: 12 }}>CO</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Chinedu Okon</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00345 • <Text style={{ color: '#D32F2F', fontWeight: 'bold' }}>18 min waiting</Text></Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={[mainStyles.badgeNormal, { marginRight: 8 }]}>
                    <Text style={mainStyles.badgeNormalText}>Normal</Text>
                  </View>
                  <Text style={mainStyles.statusInTriageText}>In Triage</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactGreenButton}
              onPress={() => router.push('/patient-details')}
            >
              <Text style={mainStyles.compactGreenButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Patient 3: Fatimah Bello */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#F0F0F0' }]}>
                <Text style={{ color: '#666', fontWeight: 'bold', fontSize: 12 }}>FB</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Fatimah Bello</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00456 • <Text style={{ color: '#D32F2F', fontWeight: 'bold' }}>10 min waiting</Text></Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={[mainStyles.badgeNormal, { marginRight: 8 }]}>
                    <Text style={mainStyles.badgeNormalText}>Normal</Text>
                  </View>
                  <Text style={mainStyles.statusInTriageText}>In Triage</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactGreenButton}
              onPress={() => router.push('/patient-details')}
            >
              <Text style={mainStyles.compactGreenButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Patient 4: Aisha Ibrahim */}
        <View style={mainStyles.patientCardContainer}>
          <View style={mainStyles.patientCardHeaderRow}>
            <View style={mainStyles.patientCardLeftSection}>
              <View style={[mainStyles.needsAttentionAvatarBox, { backgroundColor: '#E0F2F1' }]}>
                <Text style={mainStyles.needsAttentionAvatarText}>AI</Text>
              </View>
              <View style={mainStyles.patientCardDetails}>
                <Text style={mainStyles.needsAttentionPatientName}>Aisha Ibrahim</Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>P-00987 • <Text style={{ color: '#2E7D32', fontWeight: 'bold' }}>5 min waiting</Text></Text>
                
                <View style={mainStyles.patientCardBadgeRow}>
                  <View style={[mainStyles.badgeHigh, { marginRight: 8 }]}>
                    <Text style={mainStyles.badgeHighText}>High</Text>
                  </View>
                  <Text style={mainStyles.statusReadyText}>Ready for Doctor</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.compactOutlineButton}
              onPress={() => router.push('/patient-details')}
            >
              <Text style={mainStyles.compactOutlineButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}