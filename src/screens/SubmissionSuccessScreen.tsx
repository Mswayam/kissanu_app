import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

interface SubmissionSuccessScreenProps {
  onOkay: () => void;
  onHome: () => void;
}

export const SubmissionSuccessScreen: React.FC<SubmissionSuccessScreenProps> = ({
  onOkay,
  onHome,
}) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Success Icon */}
        <View style={styles.iconCircle}>
          <Text style={styles.checkIcon}>✓</Text>
        </View>

        {/* Message Header */}
        <Text style={styles.title}>{t('workSubmittedSuccess')}</Text>
        <Text style={styles.subtitle}>{t('submissionSuccessThankYou')}</Text>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>{t('submissionIdLabel')}</Text>
            <Text style={styles.infoValueBold}>{t('submissionIdVal')}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>{t('workDoneLabel')}</Text>
            <Text style={styles.infoValue}>{t('workDoneVal')}</Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionSection}>
          <TouchableOpacity activeOpacity={0.85} style={styles.okayBtn} onPress={onOkay}>
            <Text style={styles.okayBtnText}>{t('okay')}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.homeLink} onPress={onHome}>
            <Text style={styles.homeLinkText}>{t('backToHome')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F5F7F5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5E9',
    borderWidth: 2,
    borderColor: '#1E5E2F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkIcon: {
    fontSize: 40,
    fontWeight: '900',
    color: '#1E5E2F',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1E5E2F',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#657766',
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 18,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#657766',
  },
  infoValueBold: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1B3B22',
  },
  infoValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E5E2F',
  },
  divider: {
    height: 1,
    backgroundColor: '#E6EFE7',
    marginVertical: 12,
  },
  actionSection: {
    width: '100%',
  },
  okayBtn: {
    height: 52,
    backgroundColor: '#1E5E2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#1E5E2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  okayBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  homeLink: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  homeLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E5E2F',
    textDecorationLine: 'underline',
  },
});
