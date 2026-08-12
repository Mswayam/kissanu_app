import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

interface CompleteTaskScreenProps {
  onYesCompleted: () => void;
  onNotYet: () => void;
  onStopTask: () => void;
  onTabSelect: (tab: TabKey) => void;
}

export const CompleteTaskScreen: React.FC<CompleteTaskScreenProps> = ({
  onYesCompleted,
  onNotYet,
  onStopTask,
  onTabSelect,
}) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header
        showBack={true}
        onBackPress={onNotYet}
        onNavigateProfile={() => onTabSelect('Profile')}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={styles.pageTitle}>{t('taskCompleteTitle')}</Text>

        {/* Big Confirmation Card */}
        <View style={styles.confirmCard}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>
          <Text style={styles.confirmTitle}>{t('confirmCompletionTitle')}</Text>

          <View style={styles.detailsBox}>
            <Text style={styles.didYouText}>{t('didYouCompletePrompt')}</Text>
            <Text style={styles.taskName}>{t('irrigationProcess')}</Text>
            <Text style={styles.taskLoc}>{t('atPeaZone')}</Text>
          </View>
        </View>

        {/* Actions */}
        <TouchableOpacity activeOpacity={0.85} style={styles.yesBtn} onPress={onYesCompleted}>
          <Text style={styles.yesBtnText}>{t('yesCompletedBtn')}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.notYetBtn} onPress={onNotYet}>
          <Text style={styles.notYetBtnText}>{t('notYetBtn')}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.85} style={styles.stopBtn} onPress={onStopTask}>
          <Text style={styles.stopBtnText}>{t('stopTaskBtn')}</Text>
        </TouchableOpacity>
        <Text style={styles.stopCaption}>{t('stopTaskCaption')}</Text>
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
  confirmCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  checkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#1E5E2F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkIcon: {
    fontSize: 28,
    color: '#1E5E2F',
    fontWeight: '900',
  },
  confirmTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E5E2F',
    marginBottom: 16,
  },
  detailsBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  didYouText: {
    fontSize: 12,
    color: '#657766',
    marginBottom: 4,
  },
  taskName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1B3B22',
  },
  taskLoc: {
    fontSize: 12,
    color: '#657766',
    marginTop: 2,
  },
  yesBtn: {
    height: 52,
    backgroundColor: '#1E5E2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#1E5E2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  yesBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  notYetBtn: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#E6EFE7',
  },
  notYetBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#657766',
  },
  stopBtn: {
    height: 52,
    backgroundColor: '#D32F2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  stopBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  stopCaption: {
    fontSize: 11,
    color: '#8E9E90',
    textAlign: 'center',
  },
});
