import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

interface TaskDetailsScreenProps {
  onNext: () => void;
  onBack: () => void;
  onTabSelect: (tab: TabKey) => void;
}

export const TaskDetailsScreen: React.FC<TaskDetailsScreenProps> = ({
  onNext,
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
        <Text style={styles.pageTitle}>{t('taskDetailsTitle')}</Text>

        {/* Task Summary Card */}
        <View style={styles.taskCard}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.taskTitle}>{t('fertilizerApplication')}</Text>
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>{t('pendingBadge')}</Text>
            </View>
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>{t('riceZoneWest')}</Text>
          </View>
        </View>

        {/* Instructions Section */}
        <View style={styles.instructionsCard}>
          <Text style={styles.instructionsHeader}>{t('instructionsTitle')}</Text>
          <Text style={styles.instructionMain}>{t('instruction1Title')}</Text>

          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>{t('instructionPoint1')}</Text>
            <Text style={styles.bulletItem}>{t('instructionPoint2')}</Text>
            <Text style={styles.bulletItem}>{t('instructionPoint3')}</Text>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity activeOpacity={0.85} style={styles.startBtn} onPress={onNext}>
          <Text style={styles.startBtnText}>{t('startTaskBtn')} ➔</Text>
        </TouchableOpacity>
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
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1B3B22',
  },
  pendingBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pendingText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1E5E2F',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  locationText: {
    fontSize: 13,
    color: '#657766',
    fontWeight: '600',
  },
  instructionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  instructionsHeader: {
    fontSize: 12,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  instructionMain: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B3B22',
    marginBottom: 10,
  },
  bulletList: {
    paddingLeft: 4,
  },
  bulletItem: {
    fontSize: 13,
    color: '#657766',
    marginBottom: 8,
    lineHeight: 18,
  },
  startBtn: {
    height: 52,
    backgroundColor: '#1E5E2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1E5E2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  startBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
