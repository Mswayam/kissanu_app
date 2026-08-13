import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';
import { SwipeCheckInButton } from '../components/SwipeCheckInButton';

const farmMapImg = require('../assets/images/farm_map.png');
const satelliteMapImg = require('../assets/images/satellite_map.png');

interface AttendanceCheckInScreenProps {
  onNavigateProfile: () => void;
  onNavigateToCheckOut: () => void;
  onBack: () => void;
  onTabSelect: (tab: TabKey) => void;
}

export const AttendanceCheckInScreen: React.FC<AttendanceCheckInScreenProps> = ({
  onNavigateProfile,
  onNavigateToCheckOut,
  onBack,
  onTabSelect,
}) => {
  const { t } = useLanguage();
  const [isSatellite, setIsSatellite] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header
        showBack={true}
        onBackPress={onBack}
        onNavigateProfile={onNavigateProfile}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={styles.pageTitle}>{t('todaysAttendanceTitle')}</Text>

        {/* Interactive Swipe Slider (Placed at top for instant access) */}
        <View style={styles.sliderWrapper}>
          <SwipeCheckInButton
            mode="check-out"
            onSwipeComplete={onNavigateToCheckOut}
          />
        </View>

        {/* Status Banner */}
        <View style={styles.statusBanner}>
          <Text style={styles.checkIcon}>✓</Text>
          <Text style={styles.statusText}>{t('youAreCheckedIn')}</Text>
        </View>

        {/* Check-In Time Card */}
        <View style={styles.timeCard}>
          <Text style={styles.timeLabel}>{t('checkInTimeLabel')}</Text>
          <Text style={styles.largeTime}>{t('checkInTimeVal')}</Text>
          <Text style={styles.dateText}>{t('dateVal')}</Text>
        </View>

        {/* Location Verification Section */}
        <View style={styles.mapHeaderRow}>
          <Text style={styles.sectionHeader}>{t('verifiedLocationLabel')}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.mapToggleBtn}
            onPress={() => setIsSatellite(!isSatellite)}
          >
            <Text style={styles.mapToggleText}>
              {isSatellite ? '🗺️ Field View' : '🛰️ Satellite View'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mapCard}>
          {/* Real GPS Field Map Image Visual */}
          <View style={styles.mapVisualContainer}>
            <Image
              source={isSatellite ? satelliteMapImg : farmMapImg}
              style={styles.mapImage}
              resizeMode="cover"
            />
            <View style={styles.pinBadge}>
              <Text style={styles.pinText}>📍 {t('youAreHerePin')}</Text>
            </View>
          </View>

          <View style={styles.locationFooter}>
            <Text style={styles.locPinIcon}>📍</Text>
            <Text style={styles.locationAddress}>{t('locationFoliageField')}</Text>
          </View>
        </View>

        {/* GPS Verification Callout Box */}
        <View style={styles.calloutBox}>
          <Text style={styles.warningIcon}>⚠️</Text>
          <Text style={styles.calloutText}>{t('gpsNoticeText')}</Text>
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
    backgroundColor: '#E8F5E9',
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  checkIcon: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E5E2F',
    marginRight: 8,
  },
  statusText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E5E2F',
  },
  timeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  timeLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  largeTime: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1E5E2F',
  },
  dateText: {
    fontSize: 12,
    color: '#657766',
    marginTop: 4,
  },
  mapHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.8,
  },
  mapToggleBtn: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  mapToggleText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1E5E2F',
  },
  mapCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  mapVisualContainer: {
    height: 180,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  pinBadge: {
    backgroundColor: '#1E5E2F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pinText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
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
  calloutBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF3E0',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#FFE0B2',
    marginBottom: 16,
  },
  warningIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  calloutText: {
    fontSize: 11,
    color: '#E65100',
    flex: 1,
    lineHeight: 16,
    fontWeight: '600',
  },
  sliderWrapper: {
    marginVertical: 10,
    paddingHorizontal: 4,
  },
});
