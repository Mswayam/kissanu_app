import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { BackArrowIcon } from '../components/Icons';
import { OtpInput } from '../components/OtpInput';

interface OtpVerificationScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export const OtpVerificationScreen: React.FC<OtpVerificationScreenProps> = ({
  onNext,
  onBack,
}) => {
  const { t } = useLanguage();
  const [code, setCode] = useState<string[]>(['4', '8', '2', '6', '0', '']);
  const [timer, setTimer] = useState<number>(28);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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

          {/* Main Verification Card */}
          <View style={styles.card}>
            <Text style={styles.title}>{t('verifyTitle')}</Text>
            <Text style={styles.subtitle}>
              {t('verifySubtitlePrefix')}
              <Text style={styles.phoneNumber}>+91 XXXXXXX123</Text>
            </Text>

            {/* OTP Input Fields */}
            <OtpInput code={code} onChangeCode={setCode} />

            {/* Resend OTP Row */}
            <View style={styles.resendRow}>
              <Text style={styles.resendText}>{t('didnReceiveCode')}</Text>
              <TouchableOpacity activeOpacity={0.7} disabled={timer > 0}>
                <Text style={[styles.resendLink, timer > 0 && styles.resendDisabled]}>
                  {t('resendOtp')} ({`00:${timer < 10 ? '0' : ''}${timer}`})
                </Text>
              </TouchableOpacity>
            </View>

            {/* Verify CTA */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.verifyBtn}
              onPress={onNext}
            >
              <Text style={styles.verifyBtnText}>{t('verifyAndContinue')}</Text>
            </TouchableOpacity>

            {/* Wrong Number Action Link */}
            <TouchableOpacity activeOpacity={0.7} style={styles.changeNumBtn} onPress={onBack}>
              <Text style={styles.changeNumText}>{t('wrongNumberLink')}</Text>
            </TouchableOpacity>
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
    paddingVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E5E2F',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
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
    marginBottom: 10,
  },
  phoneNumber: {
    fontWeight: '800',
    color: '#1B3B22',
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  resendText: {
    fontSize: 12,
    color: '#657766',
  },
  resendLink: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E5E2F',
  },
  resendDisabled: {
    color: '#8E9E90',
  },
  verifyBtn: {
    height: 52,
    backgroundColor: '#1E5E2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    shadowColor: '#1E5E2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  verifyBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  changeNumBtn: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  changeNumText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E5E2F',
    textDecorationLine: 'underline',
  },
});
