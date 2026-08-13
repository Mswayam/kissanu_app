import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { BackArrowIcon } from '../components/Icons';

const photoProofImg = require('../assets/images/photo_proof.png');

interface PhotoProofScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export const PhotoProofScreen: React.FC<PhotoProofScreenProps> = ({ onNext, onBack }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('photoProofTitle')}</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Viewfinder Preview with Real Photo */}
        <View style={styles.viewfinderCard}>
          <Image source={photoProofImg} style={styles.viewfinderImage} resizeMode="cover" />
          <View style={styles.crosshairOverlay}>
            <View style={styles.crosshairCircle} />
          </View>
        </View>

        {/* Question Prompt Card */}
        <View style={styles.questionCard}>
          <Text style={styles.promptText}>{t('isPhotoClearPrompt')}</Text>
          <View style={styles.btnRow}>
            <TouchableOpacity activeOpacity={0.85} style={styles.clearBtn} onPress={onNext}>
              <Text style={styles.clearBtnText}>{t('yesClearBtn')}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.85} style={styles.retakeBtn} onPress={onBack}>
              <Text style={styles.retakeBtnText}>{t('retakeBtn')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Location Tag */}
        <View style={styles.locationCard}>
          <Text style={styles.locationIcon}>📍</Text>
          <View>
            <Text style={styles.locationLabel}>{t('currentTaskLocationLabel')}</Text>
            <Text style={styles.locationValue}>{t('locationIrrigationPeaZone')}</Text>
          </View>
        </View>

        {/* Shutter Bar */}
        <View style={styles.shutterBar}>
          <TouchableOpacity activeOpacity={0.7} style={styles.toolBtn}>
            <Text style={styles.toolEmoji}>🖼️</Text>
            <Text style={styles.toolLabel}>{t('gallery')}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.85} style={styles.shutterOuterCircle} onPress={onNext}>
            <View style={styles.shutterInnerCircle} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.toolBtn}>
            <Text style={styles.toolEmoji}>⚡</Text>
            <Text style={styles.toolLabel}>{t('flash')}</Text>
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
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E5E2F',
  },
  viewfinderCard: {
    height: 220,
    backgroundColor: '#81C784',
    borderRadius: 20,
    marginVertical: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  viewfinderImage: {
    width: '100%',
    height: '100%',
  },
  crosshairOverlay: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
  crosshairCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  promptText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1B3B22',
    marginBottom: 12,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  clearBtn: {
    flex: 1,
    height: 44,
    backgroundColor: '#1E5E2F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  clearBtnText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  retakeBtn: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#D32F2F',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  retakeBtnText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#D32F2F',
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  locationIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  locationLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1E5E2F',
    letterSpacing: 0.8,
  },
  locationValue: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1B3B22',
  },
  shutterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  toolBtn: {
    alignItems: 'center',
  },
  toolEmoji: {
    fontSize: 22,
  },
  toolLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#657766',
    marginTop: 2,
  },
  shutterOuterCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 4,
    borderColor: '#1E5E2F',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  shutterInnerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1E5E2F',
  },
});
