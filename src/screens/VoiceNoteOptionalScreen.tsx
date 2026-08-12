import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { BackArrowIcon } from '../components/Icons';

interface VoiceNoteOptionalScreenProps {
  onFinish: () => void;
  onBack: () => void;
}

export const VoiceNoteOptionalScreen: React.FC<VoiceNoteOptionalScreenProps> = ({
  onFinish,
  onBack,
}) => {
  const { t } = useLanguage();
  const [seconds, setSeconds] = useState<number>(8);
  const [isRecording, setIsRecording] = useState<boolean>(true);

  useEffect(() => {
    let interval: any = null;
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('voiceNoteOptionalTitle')}</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Instructions */}
        <View style={styles.instructionSection}>
          <Text style={styles.instructionTitle}>{t('recordShortNoteTitle')}</Text>
          <Text style={styles.instructionDesc}>{t('recordShortNoteDesc')}</Text>
        </View>

        {/* Recording Visualizer Card */}
        <View style={styles.visualizerCard}>
          <Text style={styles.timerText}>{formatTime(seconds)}</Text>

          {/* Waveform Graphic */}
          <View style={styles.waveformContainer}>
            <View style={[styles.waveBar, { height: 18 }]} />
            <View style={[styles.waveBar, { height: 32 }]} />
            <View style={[styles.waveBar, { height: 44 }]} />
            <View style={[styles.waveBar, { height: 26 }]} />
            <View style={[styles.waveBar, { height: 38 }]} />
            <View style={[styles.waveBar, { height: 14 }]} />
          </View>

          <View style={styles.recordingStatusRow}>
            <View style={styles.redDot} />
            <Text style={styles.statusText}>{t('recordingStatus')}</Text>
          </View>
        </View>

        {/* Task Tag */}
        <View style={styles.taskTag}>
          <Text style={styles.taskTagText}>{t('taskIrrigationPill')}</Text>
        </View>

        {/* Actions */}
        <View style={styles.actionSection}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.pauseBtn}
            onPress={() => {
              setIsRecording(false);
              onFinish();
            }}
          >
            <Text style={styles.pauseBtnText}>⏸ {t('pauseRecordingBtn')}</Text>
          </TouchableOpacity>

          <View style={styles.btnRow}>
            <TouchableOpacity activeOpacity={0.7} style={styles.secondaryBtn} onPress={onFinish}>
              <Text style={styles.secondaryBtnText}>▶ {t('playBackBtn')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.secondaryBtn, styles.dangerBtn]}
              onPress={() => setSeconds(0)}
            >
              <Text style={styles.dangerBtnText}>🗑 {t('reRecordBtn')}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtext}>{t('voiceNoteOptionalSubtext')}</Text>
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
  instructionSection: {
    marginVertical: 10,
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1B3B22',
    marginBottom: 4,
  },
  instructionDesc: {
    fontSize: 13,
    color: '#657766',
  },
  visualizerCard: {
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
  timerText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1E5E2F',
    marginBottom: 16,
  },
  waveformContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 16,
  },
  waveBar: {
    width: 6,
    backgroundColor: '#1E5E2F',
    borderRadius: 3,
    marginHorizontal: 4,
  },
  recordingStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D32F2F',
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#D32F2F',
  },
  taskTag: {
    alignSelf: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  taskTagText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E5E2F',
  },
  actionSection: {
    paddingVertical: 10,
  },
  pauseBtn: {
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
  pauseBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  secondaryBtn: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  secondaryBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1B3B22',
  },
  dangerBtn: {
    marginRight: 0,
    marginLeft: 6,
    borderColor: '#FFCDD2',
  },
  dangerBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#D32F2F',
  },
  subtext: {
    fontSize: 11,
    color: '#8E9E90',
    textAlign: 'center',
  },
});
