import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from "../../styles/main";

// Zustand store import
import { useAppStore } from "../store/useAppStore";

export default function TriageAssessmentScreen() {
  const router = useRouter();

  // Pull active patient & update action from Zustand
  const patients = useAppStore((state) => state.patients);
  const selectedPatientId = useAppStore((state) => state.selectedPatientId);
  const updatePatient = useAppStore((state) => state.updatePatient);

  // Find current active patient data or fallback
  const patient = patients.find((p) => p.id === selectedPatientId) || patients[0] || {
    id: 'P-00123',
    name: 'Sarah Ahmed',
    avatarText: 'SA',
  };

  // Modal Visibility States
  const [modalVisible, setModalVisible] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  // Form State initialized with existing patient values if present
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [temperature, setTemperature] = useState("");
  const [pulse, setPulse] = useState("");
  const [respiratoryRate, setRespiratoryRate] = useState("");
  const [oxygenSaturation, setOxygenSaturation] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [nursingNotes, setNursingNotes] = useState("");
  const [consciousness, setConsciousness] = useState("");
  const [appearance, setAppearance] = useState("");
  const [painScore, setPainScore] = useState("");
  const [otherNotes, setOtherNotes] = useState("");

  // Helper function to save vitals into Zustand while preserving unmodified fields
  const saveTriageData = (newStatus: string) => {
    if (selectedPatientId) {
      const currentPatient = patients.find((p) => p.id === selectedPatientId);

      updatePatient(selectedPatientId, {
        bloodPressure: systolic && diastolic ? `${systolic}/${diastolic} mmHg` : currentPatient?.bloodPressure,
        pulseRate: pulse ? `${pulse} bpm` : currentPatient?.pulseRate,
        temperature: temperature ? `${temperature} °C` : currentPatient?.temperature,
        respiratoryRate: respiratoryRate ? `${respiratoryRate} /min` : currentPatient?.respiratoryRate,
        status: newStatus,
      });
    }
  };

  // Handle Save Draft -> saves data and returns to queue
  const handleSaveDraft = () => {
    saveTriageData('Active');
    router.push("/queue");
  };

  // Handle step 1 confirm -> save data & transition to success modal
  const handleConfirmComplete = () => {
    saveTriageData('Active');
    setIsSuccessModal(true);
  };

  // Handle final button -> return to Patient Queue
  const handleFinalViewQueue = () => {
    setModalVisible(false);
    setIsSuccessModal(false);
    router.push("/queue");
  };

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
        <Text style={mainStyles.greetingTitle}>Triage Assessment</Text>
        <Text style={[mainStyles.greetingSubtitle, { marginBottom: 16 }]}>
          Record current vital signs, observations and nursing notes.
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
                General Consultation
              </Text>
            </View>
          </View>

          <View style={mainStyles.badgeInTriagePill}>
            <Text style={mainStyles.badgeInTriagePillText}>In Triage</Text>
          </View>
        </View>

        {/* Section 1: Vital Signs Form */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="pulse" size={18} color="#2F9094" />
            <Text style={mainStyles.detailSectionTitle}>Vital Signs</Text>
          </View>

          {/* Row 1: Blood Pressure & Temperature */}
          <View style={mainStyles.formGridRow}>
            <View style={mainStyles.formInputGroup}>
              <Text style={mainStyles.formInputLabel}>Blood Pressure</Text>
              <View style={mainStyles.inputWithUnitContainer}>
                <TextInput
                  style={mainStyles.inputWithUnitText}
                  placeholder="sys"
                  placeholderTextColor="#999999"
                  value={systolic}
                  onChangeText={setSystolic}
                  keyboardType="numeric"
                />
                <Text style={mainStyles.bpSlashText}>/</Text>
                <TextInput
                  style={mainStyles.inputWithUnitText}
                  placeholder="dia"
                  placeholderTextColor="#999999"
                  value={diastolic}
                  onChangeText={setDiastolic}
                  keyboardType="numeric"
                />
                <View style={mainStyles.inputUnitBadge}>
                  <Text style={mainStyles.inputUnitBadgeText}>mmHg</Text>
                </View>
              </View>
            </View>

            <View style={mainStyles.formInputGroup}>
              <Text style={mainStyles.formInputLabel}>Temperature</Text>
              <View style={mainStyles.inputWithUnitContainer}>
                <TextInput
                  style={mainStyles.inputWithUnitText}
                  placeholder="input"
                  placeholderTextColor="#999999"
                  value={temperature}
                  onChangeText={setTemperature}
                  keyboardType="numeric"
                />
                <View style={mainStyles.inputUnitBadge}>
                  <Text style={mainStyles.inputUnitBadgeText}>°C</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Row 2: Pulse & Respiratory Rate */}
          <View style={mainStyles.formGridRow}>
            <View style={mainStyles.formInputGroup}>
              <Text style={mainStyles.formInputLabel}>Pulse</Text>
              <View style={mainStyles.inputWithUnitContainer}>
                <TextInput
                  style={mainStyles.inputWithUnitText}
                  placeholder="input"
                  placeholderTextColor="#999999"
                  value={pulse}
                  onChangeText={setPulse}
                  keyboardType="numeric"
                />
                <View style={mainStyles.inputUnitBadge}>
                  <Text style={mainStyles.inputUnitBadgeText}>bpm</Text>
                </View>
              </View>
            </View>

            <View style={mainStyles.formInputGroup}>
              <Text style={mainStyles.formInputLabel}>Respiratory Rate</Text>
              <View style={mainStyles.inputWithUnitContainer}>
                <TextInput
                  style={mainStyles.inputWithUnitText}
                  placeholder="input"
                  placeholderTextColor="#999999"
                  value={respiratoryRate}
                  onChangeText={setRespiratoryRate}
                  keyboardType="numeric"
                />
                <View style={mainStyles.inputUnitBadge}>
                  <Text style={mainStyles.inputUnitBadgeText}>/min</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Row 3: Oxygen Saturation & Weight */}
          <View style={mainStyles.formGridRow}>
            <View style={mainStyles.formInputGroup}>
              <Text style={mainStyles.formInputLabel}>Oxygen Saturation</Text>
              <View style={mainStyles.inputWithUnitContainer}>
                <TextInput
                  style={mainStyles.inputWithUnitText}
                  placeholder="input"
                  placeholderTextColor="#999999"
                  value={oxygenSaturation}
                  onChangeText={setOxygenSaturation}
                  keyboardType="numeric"
                />
                <View style={mainStyles.inputUnitBadge}>
                  <Text style={mainStyles.inputUnitBadgeText}>%</Text>
                </View>
              </View>
            </View>

            <View style={mainStyles.formInputGroup}>
              <Text style={mainStyles.formInputLabel}>Weight</Text>
              <View style={mainStyles.inputWithUnitContainer}>
                <TextInput
                  style={mainStyles.inputWithUnitText}
                  placeholder="input"
                  placeholderTextColor="#999999"
                  value={weight}
                  onChangeText={setWeight}
                  keyboardType="numeric"
                />
                <View style={mainStyles.inputUnitBadge}>
                  <Text style={mainStyles.inputUnitBadgeText}>kg</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Row 4: Height */}
          <View style={{ marginTop: 4 }}>
            <Text style={mainStyles.formInputLabel}>Height</Text>
            <View style={mainStyles.inputWithUnitContainer}>
              <TextInput
                style={mainStyles.inputWithUnitText}
                placeholder="input"
                placeholderTextColor="#999999"
                value={height}
                onChangeText={setHeight}
                keyboardType="numeric"
              />
              <View style={mainStyles.inputUnitBadge}>
                <Text style={mainStyles.inputUnitBadgeText}>cm</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Section 2: Nursing Notes */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="document-text-outline" size={18} color="#00796B" />
            <Text style={mainStyles.detailSectionTitle}>Nursing Notes</Text>
          </View>

          <TextInput
            style={mainStyles.multilineTextArea}
            placeholder="Add additional clinical notes."
            placeholderTextColor="#999999"
            value={nursingNotes}
            onChangeText={setNursingNotes}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Section 3: Additional Observation */}
        <View style={mainStyles.detailSectionCard}>
          <View style={mainStyles.detailSectionHeaderRow}>
            <Ionicons name="medical-outline" size={18} color="#00796B" />
            <Text style={mainStyles.detailSectionTitle}>
              Additional Observation
            </Text>
          </View>

          {/* Level of Consciousness */}
          <View style={{ marginBottom: 12 }}>
            <Text style={mainStyles.formInputLabel}>
              Level of Consciousness
            </Text>
            <View style={mainStyles.inputWithUnitContainer}>
              <TextInput
                style={mainStyles.inputWithUnitText}
                placeholder="write.."
                placeholderTextColor="#999999"
                value={consciousness}
                onChangeText={setConsciousness}
              />
            </View>
          </View>

          {/* General Appearance */}
          <View style={{ marginBottom: 12 }}>
            <Text style={mainStyles.formInputLabel}>General Appearance</Text>
            <View style={mainStyles.inputWithUnitContainer}>
              <TextInput
                style={mainStyles.inputWithUnitText}
                placeholder="write.."
                placeholderTextColor="#999999"
                value={appearance}
                onChangeText={setAppearance}
              />
            </View>
          </View>

          {/* Pain Score */}
          <View style={{ marginBottom: 12 }}>
            <Text style={mainStyles.formInputLabel}>Pain Score</Text>
            <View style={mainStyles.inputWithUnitContainer}>
              <TextInput
                style={mainStyles.inputWithUnitText}
                placeholder="input"
                placeholderTextColor="#999999"
                value={painScore}
                onChangeText={setPainScore}
                keyboardType="numeric"
              />
              <View style={mainStyles.inputUnitBadge}>
                <Text style={mainStyles.inputUnitBadgeText}>/10</Text>
              </View>
            </View>
          </View>

          {/* Other Notes */}
          <View>
            <Text style={mainStyles.formInputLabel}>Other Notes</Text>
            <View style={mainStyles.inputWithUnitContainer}>
              <TextInput
                style={mainStyles.inputWithUnitText}
                placeholder="write.."
                placeholderTextColor="#999999"
                value={otherNotes}
                onChangeText={setOtherNotes}
              />
            </View>
          </View>
        </View>

        {/* Bottom Action Buttons Row */}
        <View style={mainStyles.detailBottomButtonsRow}>
          <TouchableOpacity
            style={mainStyles.detailOutlineButton}
            onPress={handleSaveDraft}
          >
            <Text style={mainStyles.detailOutlineButtonText}>Save Draft</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={mainStyles.detailPrimaryButton}
            onPress={() => {
              setIsSuccessModal(false);
              setModalVisible(true);
            }}
          >
            <Text style={mainStyles.detailPrimaryButtonText}>
              Complete Triage
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Pop-up Confirmation & Success Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={mainStyles.modalOverlay}>
          <View style={mainStyles.modalCard}>
            {!isSuccessModal ? (
              /* STEP 1: Warning Confirmation Card */
              <>
                <View style={mainStyles.modalIconBadge}>
                  <Ionicons name="warning" size={30} color="#FFFFFF" />
                </View>

                <Text style={mainStyles.modalTitle}>Complete Triage?</Text>

                <Text style={mainStyles.modalDescription}>
                  You are about to complete triage for {patient.name} (Patient ID:
                  {patient.id}).{"\n\n"}
                  Her recorded vitals, observations and nursing notes will be
                  saved and the patient will be marked as{" "}
                  <Text style={mainStyles.modalBoldText}>Ready for Doctor</Text>
                  .
                </Text>

                <View style={mainStyles.modalButtonContainer}>
                  <TouchableOpacity
                    style={mainStyles.modalPrimaryButton}
                    onPress={handleConfirmComplete}
                  >
                    <Text style={mainStyles.modalPrimaryButtonText}>
                      Complete & Send to Doctor
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={mainStyles.modalOutlineButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={mainStyles.modalOutlineButtonText}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              /* STEP 2: Triage Completed Success Card */
              <>
                <View style={mainStyles.modalSuccessIconBadge}>
                  <Ionicons name="checkmark" size={32} color="#FFFFFF" />
                </View>

                <Text style={mainStyles.modalTitle}>Triage Completed</Text>

                <Text style={mainStyles.modalSubtitleText}>
                  {patient.name} ({patient.id}) has been sent to doctor queue.
                </Text>

                <View style={mainStyles.modalStatusCard}>
                  <Text style={mainStyles.modalStatusLabel}>Status</Text>
                  <View style={mainStyles.badgeReadyForDoctorPill}>
                    <Text style={mainStyles.badgeReadyForDoctorText}>
                      Ready for Doctor
                    </Text>
                  </View>
                </View>

                <View style={mainStyles.modalButtonContainer}>
                  <TouchableOpacity
                    style={mainStyles.modalPrimaryButton}
                    onPress={handleFinalViewQueue}
                  >
                    <Text style={mainStyles.modalPrimaryButtonText}>
                      View Patient Queue
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}