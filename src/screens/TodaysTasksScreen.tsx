import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

interface TodaysTasksScreenProps {
  onNavigate: (screenId: number) => void;
  onTabSelect: (tab: TabKey) => void;
}

export const TodaysTasksScreen: React.FC<TodaysTasksScreenProps> = ({
  onNavigate,
  onTabSelect,
}) => {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'today' | 'completed'>('today');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header
        showBack={true}
        onBackPress={() => onTabSelect('Home')}
        onNavigateProfile={() => onTabSelect('Profile')}
        onLogout={() => onNavigate(1)}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={styles.pageTitle}>{t('farmingTasksTitle')}</Text>

        {/* Filter Tabs Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.toggleBtn, selectedFilter === 'today' && styles.toggleBtnActive]}
            onPress={() => setSelectedFilter('today')}
          >
            <Text style={[styles.toggleText, selectedFilter === 'today' && styles.toggleTextActive]}>
              {t('tabTodayCount')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.toggleBtn, selectedFilter === 'completed' && styles.toggleBtnActive]}
            onPress={() => setSelectedFilter('completed')}
          >
            <Text style={[styles.toggleText, selectedFilter === 'completed' && styles.toggleTextActive]}>
              {t('tabCompleted')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Task Cards List */}
        {selectedFilter === 'today' ? (
          <>
            {/* Task Card 1 */}
            <View style={styles.taskCard}>
              <View style={styles.taskHeaderRow}>
                <Text style={styles.taskTitle}>{t('irrigatingCrops')}</Text>
                <Text style={styles.clockIcon}>🕒</Text>
              </View>
              <Text style={styles.taskLocation}>{t('riceZoneNorth')}</Text>

              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.doNowBtn}
                onPress={() => onNavigate(7)}
              >
                <Text style={styles.doNowBtnText}>{t('doNowBtn')}</Text>
              </TouchableOpacity>
            </View>

            {/* Task Card 2 */}
            <View style={styles.taskCard}>
              <View style={styles.taskHeaderRow}>
                <Text style={styles.taskTitle}>{t('fertilizerApplication')}</Text>
                <Text style={styles.clockIcon}>🕒</Text>
              </View>
              <Text style={styles.taskLocation}>{t('riceZoneWest')}</Text>

              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.doNowBtn}
                onPress={() => onNavigate(7)}
              >
                <Text style={styles.doNowBtnText}>{t('doNowBtn')}</Text>
              </TouchableOpacity>
            </View>

            {/* Encouragement Banner */}
            <View style={styles.trustBanner}>
              <Text style={styles.starEmoji}>⭐</Text>
              <Text style={styles.trustBannerText}>{t('earnedTrustBanner')}</Text>
            </View>
          </>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🎉</Text>
            <Text style={styles.emptyText}>No completed tasks for today yet.</Text>
          </View>
        )}
      </ScrollView>

      <BottomNavBar activeTab="Tasks" onSelectTab={onTabSelect} />
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
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  toggleBtn: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleBtnActive: {
    backgroundColor: '#E8F5E9',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#657766',
  },
  toggleTextActive: {
    color: '#1E5E2F',
    fontWeight: '800',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  taskHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1B3B22',
  },
  clockIcon: {
    fontSize: 16,
  },
  taskLocation: {
    fontSize: 12,
    color: '#657766',
    marginTop: 4,
    marginBottom: 14,
  },
  doNowBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E5E2F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  doNowBtnText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  trustBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: 14,
    padding: 14,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  starEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  trustBannerText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E5E2F',
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 14,
    color: '#657766',
    fontWeight: '600',
  },
});
