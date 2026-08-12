import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

interface DashboardHomeScreenProps {
  onNavigate: (screenId: number) => void;
  onTabSelect: (tab: TabKey) => void;
}

export const DashboardHomeScreen: React.FC<DashboardHomeScreenProps> = ({
  onNavigate,
  onTabSelect,
}) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header
        onNavigateProfile={() => onTabSelect('Profile')}
        onLogout={() => onNavigate(1)}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* User Greeting Header */}
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>{t('goodMorningUser')}</Text>
          <Text style={styles.dateSubtext}>{t('todaysDate')}</Text>
        </View>

        {/* Overview Grid Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{t('todaysOverview')}</Text>
        </View>

        <View style={styles.gridContainer}>
          {/* Card 1: Assigned Tasks */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.overviewCard}
            onPress={() => onTabSelect('Tasks')}
          >
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardIconBadge}>
                <Text style={styles.cardEmoji}>📋</Text>
              </View>
              <View style={styles.activePill}>
                <Text style={styles.activePillText}>{t('activeBadge')}</Text>
              </View>
            </View>
            <Text style={styles.largeMetricNumber}>2</Text>
            <Text style={styles.metricLabel}>{t('assignedTasks')}</Text>
          </TouchableOpacity>

          {/* Card 2: Checked In Status */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.overviewCard}
            onPress={() => onTabSelect('Attendance')}
          >
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardIconBadge}>
                <Text style={styles.cardEmoji}>✓</Text>
              </View>
              <View style={styles.donePill}>
                <Text style={styles.donePillText}>{t('doneBadge')}</Text>
              </View>
            </View>
            <Text style={styles.largeMetricTime}>08:05 AM</Text>
            <Text style={styles.metricLabel}>{t('checkedInToday')}</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{t('quickActions')}</Text>
        </View>

        <View style={styles.quickActionsRow}>
          {/* Voice Log Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.quickActionBtn}
            onPress={() => onTabSelect('Voice')}
          >
            <Text style={styles.quickActionEmoji}>🎙️</Text>
            <Text style={styles.quickActionText}>{t('voiceLog')}</Text>
          </TouchableOpacity>

          {/* Photo Proof Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.quickActionBtn}
            onPress={() => onNavigate(10)}
          >
            <Text style={styles.quickActionEmoji}>📷</Text>
            <Text style={styles.quickActionText}>{t('photoProof')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNavBar activeTab="Home" onSelectTab={onTabSelect} />
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
  greetingSection: {
    marginBottom: 20,
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1B3B22',
  },
  dateSubtext: {
    fontSize: 13,
    color: '#657766',
    marginTop: 4,
    fontWeight: '500',
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.8,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  overviewCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIconBadge: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardEmoji: {
    fontSize: 16,
  },
  activePill: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activePillText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1E5E2F',
  },
  donePill: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  donePillText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1E5E2F',
  },
  largeMetricNumber: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1E5E2F',
    marginBottom: 4,
  },
  largeMetricTime: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E5E2F',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#657766',
    fontWeight: '600',
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionBtn: {
    width: '48%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E6EFE7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionEmoji: {
    fontSize: 18,
    marginRight: 8,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1B3B22',
  },
});
