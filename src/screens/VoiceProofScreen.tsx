import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { BackArrowIcon } from '../components/Icons';

interface VoiceProofScreenProps {
  onStartVoice: () => void;
  onCancel: () => void;
  onBack: () => void;
}

export const VoiceProofScreen: React.FC<VoiceProofScreenProps> = ({
  onStartVoice,
  onCancel,
  onBack,
}) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('voiceProofTitle')}</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={onCancel}>
            <Text style={styles.closeBtn}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Prompt Card */}
        <View style={styles.promptCard}>
          <View style={styles.micCircle}>
            <Text style={styles.micEmoji}>🎙️</Text>
          </View>
          <Text style={styles.promptTitle}>{t('recordVoiceStatementTitle')}</Text>
          <Text style={styles.promptDesc}>{t('recordVoiceStatementDesc')}</Text>
        </View>

        {/* Attachment Status Grid */}
        <View style={styles.attachmentGrid}>
          <View style={styles.attachmentBox}>
            <Text style={styles.boxEmoji}>📷</Text>
            <Text style={styles.boxText}>{t('photoAddedBadge')}</Text>
          </View>
          <View style={[styles.attachmentBox, styles.pendingBox]}>
            <Text style={styles.boxEmoji}>🎙️</Text>
            <Text style={styles.pendingText}>{t('voicePendingBadge')}</Text>
          </View>
        </View>

        {/* Action Prompt & Buttons */}
        <View style={styles.actionCard}>
          <Text style={styles.actionPrompt}>{t('areYouReadyPrompt')}</Text>
          <View style={styles.btnRow}>
            <TouchableOpacity activeOpacity={0.85} style={styles.startBtn} onPress={onStartVoice}>
              <Text style={styles.startBtnText}>{t('startVoiceNoteBtn')}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.cancelBtn} onPress={onCancel}>
              <Text style={styles.cancelBtnText}>{t('cancel')}</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E5E2F',
  },
  closeBtn: {
    fontSize: 18,
    color: '#D32F2F',
    fontWeight: '800',
  },
  promptCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6EFE7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  micCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  micEmoji: {
    fontSize: 28,
  },
  promptTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1B3B22',
    marginBottom: 8,
  },
  promptDesc: {
    fontSize: 13,
    color: '#657766',
    textAlign: 'center',
    lineHeight: 18,
  },
  attachmentGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attachmentBox: {
    width: '48%',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  pendingBox: {
    backgroundColor: '#E8F5E9',
    borderColor: '#C8E6C9',
  },
  boxEmoji: {
    fontSize: 18,
    marginRight: 8,
  },
  boxText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1B3B22',
  },
  pendingText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E5E2F',
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    marginBottom: 10,
  },
  actionPrompt: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1B3B22',
    textAlign: 'center',
    marginBottom: 12,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startBtn: {
    flex: 1,
    height: 48,
    backgroundColor: '#1E5E2F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  startBtnText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  cancelBtn: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  cancelBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#657766',
  },
});
