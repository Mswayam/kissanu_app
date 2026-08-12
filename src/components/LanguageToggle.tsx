import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.toggleContainer}
      onPress={toggleLanguage}
    >
      <Text style={styles.globeIcon}>🌐</Text>
      <Text style={styles.toggleText}>{language === 'en' ? 'हिन्दी' : 'EN'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  globeIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E5E2F',
  },
});
