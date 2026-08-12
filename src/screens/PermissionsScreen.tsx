import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { BackArrowIcon } from '../components/Icons';

interface PermissionsScreenProps {
  onFinish: () => void;
  onBack: () => void;
}

export const PermissionsScreen: React.FC<PermissionsScreenProps> = ({ onFinish, onBack }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>KISAANU NEXUS</Text>
          <View style={{ width: 32 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Title & Description */}
          <Text style={styles.title}>{t('allowPermissionsTitle')}</Text>
          <Text style={styles.subtitle}>{t('permissionsSubtitle')}</Text>

          {/* Location Permission Card */}
          <View style={styles.permissionCard}>
            <View style={styles.iconCircle}>
              <Text style={styles.cardEmoji}>📍</Text>
            </View>
            <View style={styles.cardTextContent}>
              <Text style={styles.cardTitle}>{t('locationPermissionTitle')}</Text>
              <Text style={styles.cardDesc}>{t('locationPermissionDesc')}</Text>
            </View>
          </View>

          {/* Camera Permission Card */}
          <View style={styles.permissionCard}>
            <View style={styles.iconCircle}>
              <Text style={styles.cardEmoji}>📷</Text>
            </View>
            <View style={styles.cardTextContent}>
              <Text style={styles.cardTitle}>{t('cameraPermissionTitle')}</Text>
              <Text style={styles.cardDesc}>{t('cameraPermissionDesc')}</Text>
            </View>
          </View>

          {/* Microphone Permission Card */}
          <View style={styles.permissionCard}>
            <View style={styles.iconCircle}>
              <Text style={styles.cardEmoji}>🎙️</Text>
            </View>
            <View style={styles.cardTextContent}>
              <Text style={styles.cardTitle}>{t('micPermissionTitle')}</Text>
              <Text style={styles.cardDesc}>{t('micPermissionDesc')}</Text>
            </View>
          </View>
        </ScrollView>

        {/* Footer Actions */}
        <View style={styles.footerSection}>
          <TouchableOpacity activeOpacity={0.85} style={styles.allowBtn} onPress={onFinish}>
            <Text style={styles.allowBtnText}>{t('allowAllContinue')}</Text>
          </TouchableOpacity>
          <Text style={styles.footerNote}>{t('permissionsFooterNote')}</Text>
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
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E5E2F',
    letterSpacing: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E5E2F',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#657766',
    marginBottom: 20,
    lineHeight: 18,
  },
  permissionCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardEmoji: {
    fontSize: 22,
  },
  cardTextContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1B3B22',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 12,
    color: '#657766',
    lineHeight: 16,
  },
  footerSection: {
    paddingVertical: 12,
  },
  allowBtn: {
    height: 52,
    backgroundColor: '#1E5E2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#1E5E2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  allowBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  footerNote: {
    fontSize: 11,
    color: '#8E9E90',
    textAlign: 'center',
  },
});
