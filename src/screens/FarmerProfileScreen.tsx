import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
  Alert,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

const farmerAvatarImg = require('../assets/images/farmer_welcome.png');

export interface UserProfile {
  name: string;
  phone: string;
  location: string;
  crop: string;
}

interface FarmerProfileScreenProps {
  user: UserProfile;
  onLogout: () => void;
  onBack: () => void;
  onTabSelect: (tab: TabKey) => void;
}

export const FarmerProfileScreen: React.FC<FarmerProfileScreenProps> = ({
  user,
  onLogout,
  onBack,
  onTabSelect,
}) => {
  const { language, setLanguage, t } = useLanguage();

  // Settings State Toggles
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [offlineSyncEnabled, setOfflineSyncEnabled] = useState<boolean>(true);
  const [highGpsAccuracy, setHighGpsAccuracy] = useState<boolean>(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);

  const handleToggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header showBack={true} onBackPress={onBack} onLogout={onLogout} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>{t('profileTitle') || 'FARMER PROFILE & PREFERENCES'}</Text>

        {/* Profile Card Header */}
        <View style={styles.profileHeaderCard}>
          <View style={styles.avatarWrapper}>
            <Image source={farmerAvatarImg} style={styles.avatarBigImg} resizeMode="cover" />
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedCheck}>✓</Text>
            </View>
          </View>

          <Text style={styles.userName}>{user.name || 'Swayam Mhaske'}</Text>
          <Text style={styles.userPhone}>{user.phone || '+91 98765 43210'}</Text>

          <View style={styles.badgeRow}>
            <View style={styles.roleBadge}>
              <Text style={styles.roleBadgeText}>🌾 Primary Cultivator</Text>
            </View>
            <View style={styles.scoreBadge}>
              <Text style={styles.scoreBadgeText}>⭐ 98% Rating</Text>
            </View>
          </View>
        </View>

        {/* Farm Quick Stats Bar */}
        <Text style={styles.sectionHeader}>FARM METRICS & STATS</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statEmoji}>📐</Text>
            <Text style={styles.statValue}>4.5</Text>
            <Text style={styles.statLabel}>Acres Managed</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statEmoji}>✅</Text>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Tasks Done</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statEmoji}>⏱️</Text>
            <Text style={styles.statValue}>142h</Text>
            <Text style={styles.statLabel}>Hours Worked</Text>
          </View>
        </View>

        {/* Farm Details Section */}
        <Text style={styles.sectionHeader}>FARM & CROP INFORMATION</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Farm Location</Text>
            <Text style={styles.infoValue}>{user.location || 'Sector 4B, Kisaanu Farm'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Primary Crop</Text>
            <Text style={styles.infoValue}>{user.crop || 'Paddy (Rice)'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Irrigation Source</Text>
            <Text style={styles.infoValue}>Borewell & Drip Canal</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Soil Health Status</Text>
            <Text style={[styles.infoValue, { color: '#1E5E2F' }]}>Verified (Grade A)</Text>
          </View>
        </View>

        {/* App Settings & Preferences */}
        <Text style={styles.sectionHeader}>APP PREFERENCES & CONTROLS</Text>
        <View style={styles.settingsCard}>
          {/* Language Switcher */}
          <TouchableOpacity activeOpacity={0.8} style={styles.settingRow} onPress={handleToggleLanguage}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🌐</Text>
              <View>
                <Text style={styles.settingTitle}>App Language</Text>
                <Text style={styles.settingSubtext}>Currently set to {language === 'en' ? 'English' : 'हिन्दी'}</Text>
              </View>
            </View>
            <View style={styles.langPill}>
              <Text style={styles.langPillText}>{language === 'en' ? 'हिन्दी' : 'EN'}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Notifications Toggle */}
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🔔</Text>
              <View>
                <Text style={styles.settingTitle}>Task & Weather Notifications</Text>
                <Text style={styles.settingSubtext}>Receive rain alerts & task reminders</Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#E0E0E0', true: '#C8E6C9' }}
              thumbColor={notificationsEnabled ? '#1E5E2F' : '#F5F5F5'}
            />
          </View>

          <View style={styles.divider} />

          {/* Offline Sync Toggle */}
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>⚡</Text>
              <View>
                <Text style={styles.settingTitle}>Background Offline Auto-Sync</Text>
                <Text style={styles.settingSubtext}>Automatically upload logs when online</Text>
              </View>
            </View>
            <Switch
              value={offlineSyncEnabled}
              onValueChange={setOfflineSyncEnabled}
              trackColor={{ false: '#E0E0E0', true: '#C8E6C9' }}
              thumbColor={offlineSyncEnabled ? '#1E5E2F' : '#F5F5F5'}
            />
          </View>

          <View style={styles.divider} />

          {/* GPS High Accuracy */}
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>📍</Text>
              <View>
                <Text style={styles.settingTitle}>High-Precision GPS Location</Text>
                <Text style={styles.settingSubtext}>Accurate attendance location logging</Text>
              </View>
            </View>
            <Switch
              value={highGpsAccuracy}
              onValueChange={setHighGpsAccuracy}
              trackColor={{ false: '#E0E0E0', true: '#C8E6C9' }}
              thumbColor={highGpsAccuracy ? '#1E5E2F' : '#F5F5F5'}
            />
          </View>
        </View>

        {/* Support & Help Section */}
        <Text style={styles.sectionHeader}>SUPPORT & HELP DESK</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity activeOpacity={0.8} style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>📞</Text>
              <View>
                <Text style={styles.settingTitle}>Contact Farm Supervisor</Text>
                <Text style={styles.settingSubtext}>Hotline: +91 98000 11223</Text>
              </View>
            </View>
            <Text style={styles.chevron}>➔</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity activeOpacity={0.8} style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🔒</Text>
              <View>
                <Text style={styles.settingTitle}>Security & PIN Settings</Text>
                <Text style={styles.settingSubtext}>Change 6-digit login PIN</Text>
              </View>
            </View>
            <Text style={styles.chevron}>➔</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Out Action Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.logoutBtn}
          onPress={() => setShowLogoutConfirm(true)}
        >
          <Text style={styles.logoutBtnText}>🚪 Sign Out of Kisaanu Nexus</Text>
        </TouchableOpacity>

        {/* Logout Confirmation Box */}
        {showLogoutConfirm && (
          <View style={styles.confirmBox}>
            <Text style={styles.confirmTitle}>Are you sure you want to sign out?</Text>
            <Text style={styles.confirmDesc}>Your local unsynced logs will remain saved on this device.</Text>
            <View style={styles.confirmBtnRow}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.confirmLogoutBtn}
                onPress={onLogout}
              >
                <Text style={styles.confirmLogoutText}>Yes, Sign Out</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.cancelConfirmBtn}
                onPress={() => setShowLogoutConfirm(false)}
              >
                <Text style={styles.cancelConfirmText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      <BottomNavBar activeTab="Profile" onSelectTab={onTabSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#F5F7F5' },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 16 },
  pageTitle: { fontSize: 15, fontWeight: '900', color: '#1E5E2F', textAlign: 'center', marginBottom: 16, letterSpacing: 0.8 },
  profileHeaderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
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
  avatarWrapper: { position: 'relative', marginBottom: 12 },
  avatarBigImg: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: '#1E5E2F' },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#1E5E2F',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  verifiedCheck: { color: '#FFFFFF', fontSize: 12, fontWeight: '900' },
  userName: { fontSize: 22, fontWeight: '900', color: '#1B3B22' },
  userPhone: { fontSize: 13, color: '#657766', marginTop: 2, marginBottom: 12 },
  badgeRow: { flexDirection: 'row', justifyContent: 'center' },
  roleBadge: { backgroundColor: '#E8F5E9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, marginRight: 8, borderWidth: 1, borderColor: '#C8E6C9' },
  roleBadgeText: { fontSize: 12, fontWeight: '800', color: '#1E5E2F' },
  scoreBadge: { backgroundColor: '#FFF3E0', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, borderWidth: 1, borderColor: '#FFE0B2' },
  scoreBadgeText: { fontSize: 12, fontWeight: '800', color: '#E65100' },
  sectionHeader: { fontSize: 11, fontWeight: '800', color: '#657766', letterSpacing: 0.8, marginBottom: 10, marginTop: 4 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBox: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  statEmoji: { fontSize: 20, marginBottom: 4 },
  statValue: { fontSize: 18, fontWeight: '900', color: '#1E5E2F' },
  statLabel: { fontSize: 10, color: '#657766', fontWeight: '700', marginTop: 2, textAlign: 'center' },
  infoCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#E6EFE7' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 },
  infoLabel: { fontSize: 13, color: '#657766' },
  infoValue: { fontSize: 13, fontWeight: '800', color: '#1B3B22' },
  divider: { height: 1, backgroundColor: '#E6EFE7', marginVertical: 10 },
  settingsCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#E6EFE7' },
  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 },
  settingLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 10 },
  settingIcon: { fontSize: 20, marginRight: 12 },
  settingTitle: { fontSize: 13, fontWeight: '800', color: '#1B3B22' },
  settingSubtext: { fontSize: 11, color: '#657766', marginTop: 2 },
  langPill: { backgroundColor: '#E8F5E9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, borderWidth: 1, borderColor: '#C8E6C9' },
  langPillText: { fontSize: 12, fontWeight: '800', color: '#1E5E2F' },
  chevron: { fontSize: 14, color: '#1E5E2F', fontWeight: '800' },
  logoutBtn: {
    height: 52,
    backgroundColor: '#FFEBEE',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FFCDD2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutBtnText: { fontSize: 15, fontWeight: '800', color: '#D32F2F' },
  confirmBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#FFCDD2',
    marginBottom: 20,
  },
  confirmTitle: { fontSize: 14, fontWeight: '800', color: '#D32F2F', textAlign: 'center', marginBottom: 4 },
  confirmDesc: { fontSize: 12, color: '#657766', textAlign: 'center', marginBottom: 14 },
  confirmBtnRow: { flexDirection: 'row', justifyContent: 'space-between' },
  confirmLogoutBtn: {
    flex: 1,
    height: 44,
    backgroundColor: '#D32F2F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  confirmLogoutText: { color: '#FFFFFF', fontWeight: '800', fontSize: 13 },
  cancelConfirmBtn: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  cancelConfirmText: { color: '#657766', fontWeight: '700', fontSize: 13 },
});
