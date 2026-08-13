import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';
import { SwipeCheckInButton } from '../components/SwipeCheckInButton';

interface AttendanceCheckOutScreenProps {
  onCheckOut: () => void;
  onBack: () => void;
  onTabSelect: (tab: TabKey) => void;
}

export const AttendanceCheckOutScreen: React.FC<AttendanceCheckOutScreenProps> = ({
  onCheckOut,
  onBack,
  onTabSelect,
}) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header
        showBack={true}
        onBackPress={onBack}
        onNavigateProfile={() => onTabSelect('Profile')}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={styles.pageTitle}>{t('checkOutHeaderTitle')}</Text>

        {/* Interactive Swipe Slider (Placed at top for instant access) */}
        <View style={styles.sliderWrapper}>
          <SwipeCheckInButton
            mode="check-in"
            onSwipeComplete={onCheckOut}
          />
        </View>

        {/* Status Banner */}
        <View style={styles.statusBanner}>
          <View style={styles.redDot} />
          <Text style={styles.statusText}>{t('youAreCheckedIn')}</Text>
        </View>

        {/* Attendance Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.row}>
            <Text style={styles.label}>{t('checkInTimeTodayLabel')}</Text>
            <Text style={styles.val}>{t('checkInTimeVal')}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>{t('currentTimeLabel')}</Text>
            <Text style={styles.redVal}>{t('currentTimeVal')}</Text>
          </View>
        </View>

        {/* Location Section */}
        <Text style={styles.sectionHeader}>{t('checkOutLocationLabel')}</Text>

        <View style={styles.mapCard}>
          <View style={styles.mapVisual}>
            <View style={styles.crosshairTarget}>
              <Text style={styles.crosshairText}>❌</Text>
            </View>
          </View>

          <View style={styles.locationFooter}>
            <Text style={styles.locPinIcon}>📍</Text>
            <Text style={styles.locationAddress}>{t('mainGateEntrance')}</Text>
          </View>
        </View>
      </ScrollView>

      <BottomNavBar activeTab="Attendance" onSelectTab={onTabSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F5F7F5',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E5E2F',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.8,
  },
  statusBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEBEE',
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFCDD2',
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D32F2F',
    marginRight: 8,
  },
  statusText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#D32F2F',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  label: {
    fontSize: 13,
    color: '#657766',
  },
  val: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1B3B22',
  },
  redVal: {
    fontSize: 14,
    fontWeight: '800',
    color: '#D32F2F',
  },
  divider: {
    height: 1,
    backgroundColor: '#E6EFE7',
    marginVertical: 10,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  mapCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  mapVisual: {
    height: 140,
    backgroundColor: '#66BB6A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crosshairTarget: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(211, 47, 47, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D32F2F',
  },
  crosshairText: {
    fontSize: 14,
  },
  locationFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  locPinIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  locationAddress: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1B3B22',
  },
  sliderWrapper: {
    marginVertical: 10,
    paddingHorizontal: 4,
  },
});
