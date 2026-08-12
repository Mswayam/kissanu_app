import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

interface TaskInProgressScreenProps {
  onFinish: () => void;
  onBack: () => void;
  onTabSelect: (tab: TabKey) => void;
}

export const TaskInProgressScreen: React.FC<TaskInProgressScreenProps> = ({
  onFinish,
  onBack,
  onTabSelect,
}) => {
  const { t } = useLanguage();
  const [notes, setNotes] = useState<string>('');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header
        showBack={true}
        onBackPress={onBack}
        onNavigateProfile={() => onTabSelect('Profile')}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Title */}
          <Text style={styles.pageTitle}>{t('taskInProgressTitle')}</Text>

          {/* Time Elapsed Card */}
          <View style={styles.timerCard}>
            <Text style={styles.timerLabel}>{t('timeElapsed')}</Text>
            <Text style={styles.timerValue}>00:25:36</Text>
            <Text style={styles.timerSubtext}>{t('taskStartedTime')}</Text>
          </View>

          {/* Active Task Summary Card */}
          <View style={styles.activeTaskCard}>
            <Text style={styles.cardHeaderLabel}>{t('currentActiveTask')}</Text>
            <Text style={styles.activeTaskTitle}>{t('irrigationProcess')}</Text>
            <Text style={styles.activeTaskLocation}>{t('locationPeaZone')}</Text>
          </View>

          {/* Notes Input Section */}
          <View style={styles.notesSection}>
            <Text style={styles.notesLabel}>{t('notesOptional')}</Text>
            <TextInput
              style={styles.notesInput}
              multiline
              numberOfLines={3}
              placeholder={t('notesPlaceholder')}
              placeholderTextColor="#8E9E90"
              value={notes}
              onChangeText={setNotes}
            />
          </View>

          {/* Action Button */}
          <TouchableOpacity activeOpacity={0.85} style={styles.completeBtn} onPress={onFinish}>
            <Text style={styles.completeBtnText}>{t('completeTaskBtn')}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

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
  timerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: '#1E5E2F',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  timerLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 1,
    marginBottom: 6,
  },
  timerValue: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1E5E2F',
    letterSpacing: 1,
  },
  timerSubtext: {
    fontSize: 11,
    color: '#8E9E90',
    marginTop: 6,
  },
  activeTaskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  cardHeaderLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  activeTaskTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1B3B22',
  },
  activeTaskLocation: {
    fontSize: 12,
    color: '#657766',
    marginTop: 2,
  },
  notesSection: {
    marginBottom: 20,
  },
  notesLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1B3B22',
    marginBottom: 8,
  },
  notesInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    padding: 12,
    fontSize: 14,
    color: '#1B3B22',
    height: 80,
    textAlignVertical: 'top',
  },
  completeBtn: {
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
  completeBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
