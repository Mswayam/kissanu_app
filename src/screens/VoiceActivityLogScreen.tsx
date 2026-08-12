import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

interface VoiceActivityLogScreenProps {
  onBack: () => void;
  onTabSelect: (tab: TabKey) => void;
}

export const VoiceActivityLogScreen: React.FC<VoiceActivityLogScreenProps> = ({
  onBack,
  onTabSelect,
}) => {
  const { t } = useLanguage();

  const mockAudioLogs = [
    { id: '1', title: 'Irrigation Complete Statement', duration: '00:15', date: '26 Jul 2026, 08:42 AM' },
    { id: '2', title: 'Pest Issue in Sector 3', duration: '00:32', date: '25 Jul 2026, 04:15 PM' },
    { id: '3', title: 'Fertilizer Stock Update', duration: '00:20', date: '24 Jul 2026, 11:30 AM' },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header
        showBack={true}
        onBackPress={onBack}
        onNavigateProfile={() => onTabSelect('Profile')}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>{t('voiceActivityLogTitle')}</Text>

        {mockAudioLogs.map((item) => (
          <View key={item.id} style={styles.logCard}>
            <View style={styles.micCircle}>
              <Text style={styles.micEmoji}>🎙️</Text>
            </View>

            <View style={styles.logTextWrapper}>
              <Text style={styles.logTitle}>{item.title}</Text>
              <Text style={styles.logDate}>{item.date}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} style={styles.playBtn}>
              <Text style={styles.playIcon}>▶ {item.duration}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <BottomNavBar activeTab="Voice" onSelectTab={onTabSelect} />
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
  logCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  micCircle: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  micEmoji: {
    fontSize: 20,
  },
  logTextWrapper: {
    flex: 1,
  },
  logTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1B3B22',
  },
  logDate: {
    fontSize: 11,
    color: '#657766',
    marginTop: 2,
  },
  playBtn: {
    backgroundColor: '#1E5E2F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  playIcon: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
