import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../../../store/authStore";
import { mainStyles } from "../../../styles/main";
import { Route } from "expo-router/build/Route";



export default function NurseHomeScreen() {
 const router = useRouter();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
  Alert.alert(
    "Log Out",
    "Are you sure you want to log out?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Log Out",
        style: "destructive",
        onPress: () => {
          logout();
          router.replace("/login");
        },
      },
    ]
  );
};

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView style={mainStyles.container}>
        {/* Top Brand Header with Custom CorelDraw Logo */}
        <View style={mainStyles.brandHeaderRow}>
          <View>
            <Image
              source={require("../../../assets/images/qurac-logo.png")}
              style={{ width: 110, height: 32, resizeMode: "contain" }}
            />
            <Text style={mainStyles.brandRoleText}>Nurse</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
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

            <View
              style={[mainStyles.needsAttentionAvatarBox, { marginRight: 12 }]}
            >
              <Ionicons name="person" size={20} color="#2F9094" />
            </View>

            <TouchableOpacity
              onPress={handleLogout}
              accessibilityRole="button"
              accessibilityLabel="Log out"
              style={{ padding: 6 }}
            >
              <Ionicons name="log-out-outline" size={24} color="#D32F2F" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Greeting Section */}
        <Text style={mainStyles.greetingTitle}>
          Good morning, Nurse Uniqque
        </Text>
        <Text style={mainStyles.greetingSubtitle}>
          Here's what's happening in the clinic today.
        </Text>

        {/* Appointments Banner */}
        <View style={mainStyles.appointmentsBannerCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={mainStyles.appointmentsBannerTitle}>
                Appointments
              </Text>
              <Text style={mainStyles.appointmentsBannerCount}>12</Text>
              <Text style={mainStyles.appointmentsBannerActionText}>
                View patients expected today →
              </Text>
            </View>
            <Ionicons name="calendar" size={32} color="#00796B" />
          </View>
        </View>

        {/* 4 Metric Cards Grid Row 1 */}
        <View style={mainStyles.metricGridRow}>
          <View
            style={[mainStyles.metricCard, mainStyles.metricCardLeftMargin]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View>
                <Text style={mainStyles.metricCardLabel}>Patient Waiting</Text>
                <Text style={mainStyles.metricValueWaiting}>5</Text>
              </View>
              <MaterialCommunityIcons
                name="account-group"
                size={20}
                color="#063154"
              />
            </View>
          </View>

          <View
            style={[mainStyles.metricCard, mainStyles.metricCardRightMargin]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View>
                <Text style={mainStyles.metricCardLabel}>Awaiting Triage</Text>
                <Text style={mainStyles.metricValueAwaitingTriage}>3</Text>
              </View>
              <Ionicons name="time-outline" size={20} color="#D32F2F" />
            </View>
          </View>
        </View>

        {/* 4 Metric Cards Grid Row 2 */}
        <View style={mainStyles.metricGridRow}>
          <View
            style={[mainStyles.metricCard, mainStyles.metricCardLeftMargin]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View>
                <Text style={mainStyles.metricCardLabel}>In Triage</Text>
                <Text style={mainStyles.metricValueInTriage}>2</Text>
              </View>
              <Ionicons name="pulse" size={20} color="#00796B" />
            </View>
          </View>

          <View
            style={[mainStyles.metricCard, mainStyles.metricCardRightMargin]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View>
                <Text style={mainStyles.metricCardLabel}>Ready to Doctor</Text>
                <Text style={mainStyles.metricValueReadyToDoctor}>1</Text>
              </View>
              <Ionicons
                name="checkmark-circle-outline"
                size={20}
                color="#2E7D32"
              />
            </View>
          </View>
        </View>

        {/* Needs Attention Section Header */}
        <View style={mainStyles.sectionHeaderRow}>
          <Text style={mainStyles.sectionTitleText}>Needs attention</Text>
          <TouchableOpacity style={mainStyles.sectionActionLinkContainer}>
            <Text style={mainStyles.sectionActionLinkText}>View queue</Text>
            <Ionicons name="arrow-forward" size={14} color="#2F9094" />
          </TouchableOpacity>
        </View>

        {/* Needs Attention Card 1: Chinedu Okafor */}
        <View style={mainStyles.needsAttentionCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={mainStyles.needsAttentionAvatarBox}>
                <Text style={mainStyles.needsAttentionAvatarText}>CO</Text>
              </View>
              <View>
                <Text style={mainStyles.needsAttentionPatientName}>
                  Chinedu Okafor
                </Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>
                  P-00124 • 18 min waiting
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FFEBEE",
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 4,
              }}
            >
              <Text
                style={{ color: "#D32F2F", fontSize: 10, fontWeight: "bold" }}
              >
                High
              </Text>
            </View>
          </View>
          <Text style={mainStyles.needsAttentionStatusText}>In Triage</Text>

          <TouchableOpacity style={mainStyles.needsAttentionContinueButton}>
            <Text style={mainStyles.needsAttentionContinueButtonText}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>

        {/* Needs Attention Card 2: Aisha Ibrahim */}
        <View style={mainStyles.needsAttentionCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  mainStyles.needsAttentionAvatarBox,
                  { backgroundColor: "#F0F0F0" },
                ]}
              >
                <Text
                  style={{ color: "#666", fontWeight: "bold", fontSize: 12 }}
                >
                  AI
                </Text>
              </View>
              <View>
                <Text style={mainStyles.needsAttentionPatientName}>
                  Aisha Ibrahim
                </Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>
                  P-00345 • 22 min waiting
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F0F0F0",
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 4,
              }}
            >
              <Text style={{ color: "#666", fontSize: 10, fontWeight: "bold" }}>
                Normal
              </Text>
            </View>
          </View>
          <Text
            style={[mainStyles.needsAttentionStatusText, { color: "#666" }]}
          >
            Awaiting triage
          </Text>

          <TouchableOpacity style={mainStyles.needsAttentionViewButton}>
            <Text style={mainStyles.needsAttentionViewButtonText}>View</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Appointments Section Header */}
        <View style={mainStyles.sectionHeaderRow}>
          <Text style={mainStyles.sectionTitleText}>Upcoming appointments</Text>
          <TouchableOpacity style={mainStyles.sectionActionLinkContainer}>
            <Text style={mainStyles.sectionActionLinkText}>View all</Text>
            <Ionicons name="arrow-forward" size={14} color="#2F9094" />
          </TouchableOpacity>
        </View>

        {/* Upcoming Appointment 1: Sarah Ahmed */}
        <View style={mainStyles.upcomingAppointmentCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={mainStyles.needsAttentionAvatarBox}>
                <Text style={mainStyles.needsAttentionAvatarText}>SA</Text>
              </View>
              <View>
                <Text style={mainStyles.needsAttentionPatientName}>
                  Sarah Ahmed
                </Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>
                  General Consultation • Checked In
                </Text>
              </View>
            </View>
            <Text style={mainStyles.upcomingAppointmentTimeText}>09:00 AM</Text>
          </View>
        </View>

        {/* Upcoming Appointment 2: Musa Ibrahim */}
        <View style={mainStyles.upcomingAppointmentCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={mainStyles.needsAttentionAvatarBox}>
                <Text style={mainStyles.needsAttentionAvatarText}>MI</Text>
              </View>
              <View>
                <Text style={mainStyles.needsAttentionPatientName}>
                  Musa Ibrahim
                </Text>
                <Text style={mainStyles.needsAttentionPatientSubText}>
                  Follow Up • Pending
                </Text>
              </View>
            </View>
            <Text style={mainStyles.upcomingAppointmentTimeText}>10:00 AM</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
