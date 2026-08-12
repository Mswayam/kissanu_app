import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { BackArrowIcon } from '../components/Icons';

interface MobileLoginScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export const MobileLoginScreen: React.FC<MobileLoginScreenProps> = ({ onNext, onBack }) => {
  const { t } = useLanguage();
  const [phoneNumber, setPhoneNumber] = useState<string>('98765 43210');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
              <BackArrowIcon />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>KISAANU NEXUS</Text>
            <View style={{ width: 32 }} />
          </View>

          {/* Banner Graphic */}
          <View style={styles.bannerCard}>
            <Text style={styles.bannerEmoji}>🚜</Text>
            <Text style={styles.bannerText}>Smart Farm Management</Text>
          </View>

          {/* Login Form */}
          <View style={styles.formContainer}>
            <Text style={styles.welcomeText}>{t('welcomeBack')}</Text>
            <Text style={styles.subtitleText}>{t('loginSubtitle')}</Text>

            <Text style={styles.label}>{t('mobileNumberLabel')}</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.prefix}>+91</Text>
              <View style={styles.divider} />
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder={t('phonePlaceholder')}
                placeholderTextColor="#8E9E90"
              />
            </View>

            {/* Send OTP Button */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.sendBtn}
              onPress={onNext}
            >
              <Text style={styles.sendBtnText}>{t('sendOtp')} ➔</Text>
            </TouchableOpacity>

            <Text style={styles.disclaimer}>{t('disclaimerText')}</Text>
          </View>

          {/* Security Badge */}
          <View style={styles.securityBadge}>
            <Text style={styles.lockIcon}>🔒</Text>
            <Text style={styles.securityText}>{t('secureInfo')}</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    letterSpacing: 1,
  },
  bannerCard: {
    height: 140,
    backgroundColor: '#E8F5E9',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  bannerEmoji: {
    fontSize: 48,
  },
  bannerText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E5E2F',
    marginTop: 4,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E5E2F',
  },
  subtitleText: {
    fontSize: 13,
    color: '#657766',
    marginBottom: 20,
    marginTop: 2,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1B3B22',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#1E5E2F',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  prefix: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1B3B22',
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#E6EFE7',
    marginHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#1B3B22',
  },
  sendBtn: {
    height: 52,
    backgroundColor: '#1E5E2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    shadowColor: '#1E5E2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  sendBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  disclaimer: {
    fontSize: 11,
    color: '#8E9E90',
    textAlign: 'center',
    marginTop: 12,
  },
  securityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  lockIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  securityText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E5E2F',
  },
});
