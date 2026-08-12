import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { BackArrowIcon } from '../components/Icons';

interface SubmitProofScreenProps {
  onSubmit: () => void;
  onBack: () => void;
}

export const SubmitProofScreen: React.FC<SubmitProofScreenProps> = ({ onSubmit, onBack }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('submitProofTitle')}</Text>
          <View style={{ width: 32 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Review Attachments Card */}
          <View style={styles.card}>
            <Text style={styles.sectionHeader}>{t('reviewAttachmentsTitle')}</Text>

            {/* Photo Attachment Item */}
            <View style={styles.attachmentItem}>
              <View style={styles.thumbnailPlaceholder}>
                <Text style={styles.thumbEmoji}>🌾</Text>
              </View>
              <View style={styles.itemTextContent}>
                <Text style={styles.fileName}>{t('photoAttachmentName')}</Text>
                <Text style={styles.fileSize}>{t('photoAttachmentSize')}</Text>
              </View>
              <Text style={styles.checkIcon}>✓</Text>
            </View>

            {/* Voice Note Attachment Item */}
            <View style={styles.attachmentItem}>
              <View style={styles.voiceIconSquare}>
                <Text style={styles.voiceEmoji}>🎙️</Text>
              </View>
              <View style={styles.itemTextContent}>
                <Text style={styles.fileName}>{t('voiceAttachmentName')}</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} style={styles.playBtn}>
                <Text style={styles.playIcon}>▶</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Farming Task Summary Card */}
          <View style={styles.card}>
            <Text style={styles.sectionHeader}>{t('farmingTaskSection')}</Text>
            <Text style={styles.taskName}>{t('taskNameIrrigation')}</Text>

            <View style={styles.divider} />

            <Text style={styles.sectionHeader}>{t('submissionTimestampLabel')}</Text>
            <Text style={styles.timestampVal}>{t('submissionTimestampVal')}</Text>
          </View>
        </ScrollView>

        {/* Submit CTA */}
        <View style={styles.footerSection}>
          <TouchableOpacity activeOpacity={0.85} style={styles.submitBtn} onPress={onSubmit}>
            <Text style={styles.submitBtnText}>{t('submitWorkProofBtn')} ➔</Text>
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
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E5E2F',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  card: {
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
  sectionHeader: {
    fontSize: 11,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  attachmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  thumbnailPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#A5D6A7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  thumbEmoji: {
    fontSize: 22,
  },
  voiceIconSquare: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  voiceEmoji: {
    fontSize: 20,
  },
  itemTextContent: {
    flex: 1,
  },
  fileName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1B3B22',
  },
  fileSize: {
    fontSize: 11,
    color: '#657766',
    marginTop: 2,
  },
  checkIcon: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E5E2F',
  },
  playBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 12,
    color: '#1E5E2F',
    marginLeft: 2,
  },
  taskName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1B3B22',
  },
  divider: {
    height: 1,
    backgroundColor: '#E6EFE7',
    marginVertical: 12,
  },
  timestampVal: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B3B22',
  },
  footerSection: {
    paddingVertical: 10,
  },
  submitBtn: {
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
  submitBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
