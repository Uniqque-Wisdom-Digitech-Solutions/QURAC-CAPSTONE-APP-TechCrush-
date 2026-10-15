import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from "../../styles/main";

export default function TriageScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView style={mainStyles.container}>
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

        {/* Back Navigation Link */}
        <TouchableOpacity
          style={mainStyles.backNavigationRow}
          onPress={() => router.push("/queue")}
        >
          <Ionicons name="arrow-back" size={16} color="#2F9094" />
          <Text style={mainStyles.backNavigationText}>
            Back to Patient Queue
          </Text>
        </TouchableOpacity>

        {/* Screen Title & Subtitle */}
        <Text style={mainStyles.greetingTitle}>Triage</Text>
        <Text style={[mainStyles.greetingSubtitle, { marginBottom: 16 }]}>
          Review patient information before starting the triage assesment
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
                SA
              </Text>
            </View>
            <View style={mainStyles.patientCardDetails}>
              <Text style={mainStyles.needsAttentionPatientName}>
                Sarah Ahmed
              </Text>
              <Text style={mainStyles.needsAttentionPatientSubText}>
                Patient ID: P-00123
              </Text>
              <Text
                style={[
                  mainStyles.needsAttentionPatientSubText,
                  { color: "#D32F2F", fontWeight: "bold" },
                ]}
              >
                18 min waiting
              </Text>
            </View>
          </View>

          <View style={mainStyles.badgeInTriagePill}>
            <Text style={mainStyles.badgeInTriagePillText}>In Triage</Text>
          </View>
        </View>

        {/* Section 1: Recent Vitals */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="pulse" size={18} color="#2F9094" />
            <Text style={mainStyles.detailSectionTitle}>Recent Vitals</Text>
          </View>

          <View style={mainStyles.triageVitalsGridRow}>
            <View style={mainStyles.triageVitalCard}>
              <Text style={mainStyles.detailDataLabel}>BP</Text>
              <Text style={mainStyles.triageVitalValue}>128/84 mmHg</Text>
            </View>
            <View style={mainStyles.triageVitalCard}>
              <Text style={mainStyles.detailDataLabel}>Pulse</Text>
              <Text style={mainStyles.triageVitalValue}>88 bpm</Text>
            </View>
          </View>

          <View style={mainStyles.triageVitalsGridRow}>
            <View style={mainStyles.triageVitalCard}>
              <Text style={mainStyles.detailDataLabel}>Temperature</Text>
              <Text style={mainStyles.triageVitalValue}>37.8 °C</Text>
            </View>
            <View style={mainStyles.triageVitalCard}>
              <Text style={mainStyles.detailDataLabel}>Respiratory Rate</Text>
              <Text style={mainStyles.triageVitalValue}>20 /min</Text>
            </View>
          </View>
        </View>

        {/* Section 2: Presenting Complaint */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="document-text-outline" size={18} color="#00796B" />
            <Text style={mainStyles.detailSectionTitle}>
              Presenting Complaint
            </Text>
          </View>

          <Text style={mainStyles.needsAttentionPatientSubText}>
            Headache and fever for 2 days
          </Text>
        </View>

        {/* Section 3: Allergies */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={18}
              color="#00796B"
            />
            <Text style={mainStyles.detailSectionTitle}>Allergies</Text>
          </View>

          <View style={mainStyles.allergiesBox}>
            <Text style={mainStyles.allergiesText}>No known allergies</Text>
          </View>
        </View>

        {/* Section 4: Relevant History */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <MaterialCommunityIcons name="history" size={18} color="#00796B" />
            <Text style={mainStyles.detailSectionTitle}>Relevant History</Text>
          </View>

          <Text
            style={[
              mainStyles.needsAttentionPatientSubText,
              { marginBottom: 4 },
            ]}
          >
            • Malaria - Jun 2026
          </Text>
          <Text style={mainStyles.needsAttentionPatientSubText}>
            • Hypertension - Feb 2026
          </Text>
        </View>

        {/* Bottom Primary Button */}
        <TouchableOpacity
          style={mainStyles.fullWidthPrimaryButton}
          onPress={() => router.push("/triage-assessment")}
        >
          <Text style={mainStyles.fullWidthPrimaryButtonText}>
            Proceed to Triage
          </Text>
          <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
