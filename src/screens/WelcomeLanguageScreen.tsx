import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const farmerWelcomeImg = require('../assets/images/farmer_welcome.png');

interface WelcomeLanguageScreenProps {
  onNext: () => void;
  onRegister: () => void;
}

export const WelcomeLanguageScreen: React.FC<WelcomeLanguageScreenProps> = ({
  onNext,
  onRegister,
}) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Top App Identity */}
        <View style={styles.headerSection}>
          <Text style={styles.appName}>KISAANU NEXUS</Text>
          <Text style={styles.tagline}>{t('tagline')}</Text>
        </View>

        {/* Central Illustration Card */}
        <View style={styles.heroCard}>
          <Image source={farmerWelcomeImg} style={styles.heroImage} resizeMode="cover" />
        </View>

        {/* Language Options Section */}
        <View style={styles.languageSection}>
          <Text style={styles.sectionTitle}>{t('chooseLanguageTitle')}</Text>

          {/* English Option */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.langBtn, language === 'en' && styles.langBtnActive]}
            onPress={() => {
              setLanguage('en');
              onNext();
            }}
          >
            <Text style={[styles.langText, language === 'en' && styles.langTextActive]}>
              {t('englishBtnLabel')} {language === 'en' ? '✓' : ''}
            </Text>
          </TouchableOpacity>

          {/* Hindi Option */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.langBtn, language === 'hi' && styles.langBtnActive]}
            onPress={() => {
              setLanguage('hi');
              onNext();
            }}
          >
            <Text style={[styles.langText, language === 'hi' && styles.langTextActive]}>
              {t('hindiBtnLabel')} {language === 'hi' ? '✓' : ''}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Additional Actions & Version */}
        <View style={styles.footerSection}>
          <TouchableOpacity activeOpacity={0.7} style={styles.registerLink} onPress={onRegister}>
            <Text style={styles.registerLinkText}>{t('newFarmerRegister')}</Text>
          </TouchableOpacity>
          <Text style={styles.versionText}>{t('versionFooter')}</Text>
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
    paddingVertical: 16,
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1E5E2F',
    letterSpacing: 1.2,
  },
  tagline: {
    fontSize: 13,
    fontWeight: '600',
    color: '#657766',
    marginTop: 4,
  },
  heroCard: {
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    overflow: 'hidden',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  languageSection: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B3B22',
    textAlign: 'center',
    marginBottom: 16,
  },
  langBtn: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E6EFE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  langBtnActive: {
    backgroundColor: '#1E5E2F',
    borderColor: '#1E5E2F',
  },
  langText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B3B22',
  },
  langTextActive: {
    color: '#FFFFFF',
  },
  footerSection: {
    alignItems: 'center',
    marginBottom: 10,
  },
  registerLink: {
    paddingVertical: 8,
    marginBottom: 8,
  },
  registerLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E5E2F',
    textDecorationLine: 'underline',
  },
  versionText: {
    fontSize: 11,
    color: '#8E9E90',
    textAlign: 'center',
  },
});
