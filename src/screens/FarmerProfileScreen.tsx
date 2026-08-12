import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

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
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header showBack={true} onBackPress={onBack} onLogout={onLogout} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>{t('profileTitle')}</Text>

        <View style={styles.profileHeaderCard}>
          <View style={styles.avatarBig}>
            <Text style={styles.avatarInitial}>{user.name ? user.name.charAt(0) : 'S'}</Text>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userPhone}>{user.phone}</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Farm Location</Text>
            <Text style={styles.infoValue}>{user.location}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Primary Crop</Text>
            <Text style={styles.infoValue}>{user.crop}</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.85} style={styles.logoutBtn} onPress={onLogout}>
          <Text style={styles.logoutBtnText}>Sign Out / 🚪</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavBar activeTab="Profile" onSelectTab={onTabSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#F5F7F5' },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 16 },
  pageTitle: { fontSize: 16, fontWeight: '900', color: '#1E5E2F', textAlign: 'center', marginBottom: 16 },
  profileHeaderCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#E6EFE7' },
  avatarBig: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#00BFA5', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  avatarInitial: { fontSize: 32, fontWeight: '900', color: '#FFFFFF' },
  userName: { fontSize: 20, fontWeight: '900', color: '#1B3B22' },
  userPhone: { fontSize: 13, color: '#657766', marginTop: 2 },
  infoCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 24, borderWidth: 1, borderColor: '#E6EFE7' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 },
  infoLabel: { fontSize: 13, color: '#657766' },
  infoValue: { fontSize: 14, fontWeight: '800', color: '#1B3B22' },
  divider: { height: 1, backgroundColor: '#E6EFE7', marginVertical: 10 },
  logoutBtn: { height: 50, backgroundColor: '#FFEBEE', borderRadius: 12, borderWidth: 1, borderColor: '#FFCDD2', justifyContent: 'center', alignItems: 'center' },
  logoutBtnText: { fontSize: 15, fontWeight: '800', color: '#D32F2F' },
});
