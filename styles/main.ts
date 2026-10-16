import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  // Global Layout
  safeArea: {
    flex: 1,
    backgroundColor: '#fffffff',
  },
  container: {
    flex: 1,
    padding: 16,
  },

  // Authentication Screen
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  authBrandTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#063154',
    textAlign: 'center',
    marginBottom: 8,
  },
  authBrandSubtitle: {
    fontSize: 14,
    color: '#2F9094',
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: '600',
  },
  authInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 14,
    backgroundColor: '#F8F9FA',
  },
  authPrimaryButton: {
    backgroundColor: '#2F9094',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  authSecondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2F9094',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  authButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  authSecondaryButtonText: {
    color: '#2F9094',
    fontSize: 14,
    fontWeight: 'bold',
  },
  authSwitchText: {
    color: '#666666',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 13,
  },
  authSwitchTextBold: {
    color: '#2F9094',
    fontWeight: 'bold',
  },

  // Header & Greeting
  brandHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  brandLogoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F9094',
  },
  brandRoleText: {
    fontSize: 12,
    color: '#666666',
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#063154',
    marginTop: 2,
  },
  greetingSubtitle: {
    color: '#666666',
    marginBottom: 20,
  },

  //APPOINTMENTS TAB SCREEN

  // Appointments Banner
  appointmentsBannerCard: {
    backgroundColor: '#E0F2F1',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  appointmentsBannerTitle: {
    color: '#00796B',
    fontSize: 14,
    fontWeight: '500',
  },
  appointmentsBannerCount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004D40',
    marginVertical: 4,
  },
  appointmentsBannerActionText: {
    color: '#00796B',
    fontSize: 13,
  },

  // 4 Metric Cards Grid
  metricGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  metricCardLeftMargin: {
    marginRight: 8,
  },
  metricCardRightMargin: {
    marginLeft: 8,
  },
  metricCardLabel: {
    color: '#666666',
    fontSize: 12,
  },
  metricValueWaiting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#063154',
    marginVertical: 4,
  },
  metricValueAwaitingTriage: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginVertical: 4,
  },
  metricValueInTriage: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00796B',
    marginVertical: 4,
  },
  metricValueReadyToDoctor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 4,
  },

  // Section Headers & Vector Arrow Links
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#063154',
  },
  sectionActionLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionActionLinkText: {
    color: '#2F9094',
    fontSize: 13,
    fontWeight: '600',
    marginRight: 4,
  },

  // Needs Attention Cards
  needsAttentionCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
  },
  needsAttentionAvatarBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  needsAttentionAvatarText: {
    color: '#00796B',
    fontWeight: 'bold',
    fontSize: 12,
  },
  needsAttentionPatientName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },
  needsAttentionPatientSubText: {
    color: '#666666',
    fontSize: 12,
    marginTop: 3,
  },
  needsAttentionStatusText: {
    color: '#2F9094',
    fontSize: 12,
    marginTop: 8,
    fontWeight: '500',
  },
  needsAttentionContinueButton: {
    backgroundColor: '#2F9094',
    padding: 12,
    borderRadius: 18,
    marginTop: 14,
    alignItems: 'center',
  },
  needsAttentionContinueButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  needsAttentionViewButton: {
    backgroundColor: '#E0F2F1',
    padding: 12,
    borderRadius: 18,
    marginTop: 14,
    alignItems: 'center',
  },
  needsAttentionViewButtonText: {
    color: '#00796B',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Upcoming Appointments Cards
  upcomingAppointmentCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
  },
  upcomingAppointmentTimeText: {
    color: '#2F9094',
    fontWeight: 'bold',
    fontSize: 13,
  },

  //APPOINTMENTS TAB STACK VIEW SCREENS
  // Appointments List & Details Styles
  appStatBanner: {
    backgroundColor: '#00695C',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  appStatBannerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  appStatBannerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appStatBannerNumber: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  appMetricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  appMetricCard: {
    backgroundColor: '#E0F2F1',
    borderRadius: 10,
    padding: 12,
    width: '48%',
  },
  appMetricCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  appMetricCardLabel: {
    fontSize: 12,
    color: '#333333',
    fontWeight: '600',
  },
  appMetricCardCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004D40',
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 16,
  },
  searchBoxInput: {
    flex: 1,
    fontSize: 13,
    color: '#333333',
    marginLeft: 8,
  },
  appointmentListItemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailInfoLabel: {
    fontSize: 12,
    color: '#666666',
    flex: 1,
  },
  detailInfoValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
    flex: 1.5,
    textAlign: 'right',
  },

  // QUEUE TAB

  // Queue Tab & Patient Queue Layouts
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  searchBarInput: {
    flex: 1,
    fontSize: 13,
    color: '#333333',
    marginLeft: 8,
  },
  queueMetricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: -4,
  },
  queueMetricCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  queueMetricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#063154',
    marginVertical: 4,
  },

  // Status Badges
  badgeHigh: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeHighText: {
    color: '#D32F2F',
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeNormal: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeNormalText: {
    color: '#666666',
    fontSize: 10,
    fontWeight: 'bold',
  },
  statusReadyText: {
    color: '#00796B',
    fontSize: 12,
    marginTop: 6,
    fontWeight: '600',
  },
  statusInTriageText: {
    color: '#2F9094',
    fontSize: 12,
    marginTop: 6,
    fontWeight: '600',
  },

  // Patient Card Container Layouts (Zero Inline Style support)
  patientCardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
  },
  patientCardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  patientCardLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  patientCardDetails: {
    flex: 1,
  },
  patientCardBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  // Action Buttons inside Patient Cards
  cardActionButtonGreen: {
    backgroundColor: '#00796B',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 12,
  },
  cardActionOutlineButton: {
    backgroundColor: '#E0F2F1',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 12,
  },
  cardActionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardActionOutlineButtonText: {
    color: '#00796B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  compactGreenButton: {
    backgroundColor: '#00796B',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  compactGreenButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  compactOutlineButton: {
    backgroundColor: '#E0F2F1',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  compactOutlineButtonText: {
    color: '#00796B',
    fontSize: 13,
    fontWeight: 'bold',
  },

  // 2x2 Grid Metric Cards Styling
  queueGridContainer: {
    marginBottom: 16,
  },
  queueGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  queueGridCard: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    padding: 14,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  queueGridCardWhite: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginHorizontal: 4,
  },

  //APPOINTMENT TAB

  // Appointment Status Badges (Single Unified Declaration)
  badgeConfirmed: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeConfirmedText: {
    color: '#15803D',
    fontSize: 12,
    fontWeight: '600',
  },
  badgePending: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgePendingText: {
    color: '#E65100',
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeNoShow: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeNoShowText: {
    color: '#C62828',
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeCheckedIn: {
    backgroundColor: '#E0F2F1',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeCheckedInText: {
    color: '#00695C',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Top Banner Row Layout
  appointmentsBannerCardSolid: {
    backgroundColor: '#00796B',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appointmentsBannerTitleSolid: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  appointmentsBannerCountSolid: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  
  // PATIENTS
  
  // Patients screen badges
  badgeActiveVisit: {
    backgroundColor: '#DCEDC8',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeActiveVisitText: {
    color: '#33691E',
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeUpcomingTag: {
    backgroundColor: '#2F4F4F',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeUpcomingTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeNoRecentVisit: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeNoRecentVisitText: {
    color: '#616161',
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeActiveTag: {
    backgroundColor: '#C8E6C9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeActiveTagText: {
    color: '#2E7D32',
    fontSize: 10,
    fontWeight: 'bold',
  },
  patientsListHeaderCount: {
    color: '#888888',
    fontSize: 13,
    fontWeight: 'normal',
  },

  //STACK VIEW SCREENS ACTION BUTTONS PER TAB

  // QUEUE TAB
  // PATIENT DETAILS SCREEN STYLES

  // Back Navigation Link
  backNavigationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  backNavigationText: {
    color: '#2F9094',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 4,
  },

  // Patient Details Header Card
  patientDetailHeaderCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  badgeAwaitingTriage: {
    backgroundColor: '#FFE0B2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeAwaitingTriageText: {
    color: '#E65100',
    fontSize: 11,
    fontWeight: 'bold',
  },

  // Detail Section Cards
  detailSectionCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 16,
  },
  detailSectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailSectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#063154',
    marginLeft: 8,
  },

  // Key-Value Rows inside Visit Information
  detailDataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailDataLabel: {
    color: '#666666',
    fontSize: 13,
  },
  detailDataValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
  },

  // Allergies Box
  allergiesBox: {
    backgroundColor: '#E0F2F1',
    padding: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  allergiesText: {
    color: '#00796B',
    fontSize: 13,
    fontWeight: '500',
  },

  // Bottom Buttons Row
  detailBottomButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 32,
  },
  detailOutlineButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  detailOutlineButtonText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailPrimaryButton: {
    flex: 1.5,
    backgroundColor: '#00796B',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 8,
  },
  detailPrimaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 6,
  },

  // TRIAGE SCREEN STYLES
  // Triage Screen Styles
  badgeInTriagePill: {
    backgroundColor: '#CFD8DC',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeInTriagePillText: {
    color: '#37474F',
    fontSize: 11,
    fontWeight: 'bold',
  },
  triageVitalsGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  triageVitalCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  triageVitalValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 4,
  },
  fullWidthPrimaryButton: {
    backgroundColor: '#2F9094',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 32,
  },
  fullWidthPrimaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 6,
  },

  // TRIAGE ASSESSMENT FORM SCREEN STYLES
  // Vital Signs Form Styles (Fixed Flex & Layout for Web)
  formGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  formInputGroup: {
    flex: 1,
    marginHorizontal: 4,
  },
  formInputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 6,
  },
  inputWithUnitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    height: 42,
    width: '100%',
  },
  inputWithUnitText: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 10,
    fontSize: 13,
    color: '#333333',
    height: '100%',
  },
  inputUnitBadge: {
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#E0E0E0',
    minWidth: 48,
  },
  inputUnitBadgeText: {
    fontSize: 11,
    color: '#666666',
    fontWeight: '600',
  },
  bpSlashText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666666',
    paddingHorizontal: 2,
  },
  multilineTextArea: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 13,
    color: '#333333',
    height: 90,
    textAlignVertical: 'top',
  },

  // Confirmation Modal Styles (Complete Triage popup)
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  modalIconBadge: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#063154',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 13,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },
  modalBoldText: {
    fontWeight: 'bold',
    color: '#333333',
  },
  modalButtonContainer: {
    width: '100%',
    gap: 10,
  },
  modalPrimaryButton: {
    backgroundColor: '#2F9094',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
  },
  modalPrimaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalOutlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
  },
  modalOutlineButtonText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
  },
  
  // Success Modal Styles
  modalSuccessIconBadge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2F9094',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalSubtitleText: {
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalStatusCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalStatusLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  badgeReadyForDoctorPill: {
    backgroundColor: '#B2DFDB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeReadyForDoctorText: {
    color: '#004D40',
    fontSize: 12,
    fontWeight: 'bold',
  },
});