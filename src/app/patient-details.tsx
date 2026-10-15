import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from "../../styles/main";

export default function PatientDetailsScreen() {
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

        {/* Back Navigation Link to Queue */}
        <TouchableOpacity
          style={mainStyles.backNavigationRow}
          onPress={() => router.push("/queue")}
        >
          <Ionicons name="chevron-back" size={16} color="#2F9094" />
          <Text style={mainStyles.backNavigationText}>Patient Queue</Text>
        </TouchableOpacity>

        {/* Screen Title */}
        <Text style={[mainStyles.greetingTitle, { marginBottom: 16 }]}>
          Patient Details
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
              <Text style={mainStyles.needsAttentionPatientSubText}>
                38 years • Female
              </Text>
            </View>
          </View>

          <View style={mainStyles.badgeAwaitingTriage}>
            <Text style={mainStyles.badgeAwaitingTriageText}>
              Awaiting Triage
            </Text>
          </View>
        </View>

        {/* Visit Information Section */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="calendar-outline" size={18} color="#00796B" />
            <Text style={mainStyles.detailSectionTitle}>Visit Information</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Visit Type</Text>
            <Text style={mainStyles.detailDataValue}>General Consultation</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Visit Source</Text>
            <Text style={mainStyles.detailDataValue}>Appointment</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Arrival Time</Text>
            <Text style={mainStyles.detailDataValue}>08:15 AM</Text>
          </View>

          <View style={mainStyles.detailDataRow}>
            <Text style={mainStyles.detailDataLabel}>Waiting Time</Text>
            <Text style={[mainStyles.detailDataValue, { color: "#D32F2F" }]}>
              18 minutes
            </Text>
          </View>
        </View>

        {/* Reason for Visit Section */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="document-text-outline" size={18} color="#00796B" />
            <Text style={mainStyles.detailSectionTitle}>Reason for Visit</Text>
          </View>

          <Text style={mainStyles.needsAttentionPatientSubText}>
            Headache and fever for 2 days. Feeling Weak and loss of appetite
          </Text>
        </View>

        {/* Allergies Section */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={18}
              color="#E65100"
            />
            <Text style={mainStyles.detailSectionTitle}>Allergies</Text>
          </View>

          <View style={mainStyles.allergiesBox}>
            <Text style={mainStyles.allergiesText}>No known allergies</Text>
          </View>
        </View>

        {/* Relevant History Section */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <MaterialCommunityIcons name="history" size={18} color="#E65100" />
            <Text style={mainStyles.detailSectionTitle}>Relevant History</Text>
          </View>

          <Text style={mainStyles.needsAttentionPatientSubText}>
            Malaria - June 2026
          </Text>
        </View>

        {/* Bottom Action Buttons */}
        <View style={mainStyles.detailBottomButtonsRow}>
          <TouchableOpacity
            style={mainStyles.detailOutlineButton}
            onPress={() => router.push("/queue")}
          >
            <Text style={mainStyles.detailOutlineButtonText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={mainStyles.detailPrimaryButton}
            onPress={() => router.push("/triage")}
          >
            <Text style={mainStyles.detailPrimaryButtonText}>Start Triage</Text>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
