import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { BackArrowIcon } from '../components/Icons';

export interface NewUser {
  name: string;
  phone: string;
  location: string;
  crop: string;
}

interface NewRegistrationScreenProps {
  onRegisterSuccess: (user: NewUser) => void;
  onBack: () => void;
}

export const NewRegistrationScreen: React.FC<NewRegistrationScreenProps> = ({
  onRegisterSuccess,
  onBack,
}) => {
  const { t } = useLanguage();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [crop, setCrop] = useState<string>(t('cropPaddy'));

  const handleSubmit = () => {
    onRegisterSuccess({
      name: name || 'Swayam Mhaske',
      phone: phone ? `+91 ${phone}` : '+91 98765 43210',
      location: location || 'Sector 4B, Kisaanu Farm',
      crop,
    });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('registerTitle')}</Text>
          <View style={{ width: 32 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.subtitle}>{t('registerSubtitle')}</Text>

          <View style={styles.card}>
            <Text style={styles.label}>{t('fullNameLabel')}</Text>
            <TextInput
              style={styles.input}
              placeholder={t('fullNamePlaceholder')}
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>{t('mobileLabel')}</Text>
            <TextInput
              style={styles.input}
              placeholder="98765 43210"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

            <Text style={styles.label}>{t('villageLocationLabel')}</Text>
            <TextInput
              style={styles.input}
              placeholder={t('villageLocationPlaceholder')}
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </ScrollView>

        <TouchableOpacity activeOpacity={0.85} style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitBtnText}>{t('registerSubmitBtn')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#F5F7F5' },
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 12, justifyContent: 'space-between' },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, marginBottom: 12 },
  headerTitle: { fontSize: 16, fontWeight: '900', color: '#1E5E2F' },
  scrollContent: { paddingBottom: 20 },
  subtitle: { fontSize: 13, color: '#657766', marginBottom: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#E6EFE7' },
  label: { fontSize: 13, fontWeight: '700', color: '#1B3B22', marginBottom: 6 },
  input: { height: 48, borderWidth: 1, borderColor: '#E6EFE7', borderRadius: 10, paddingHorizontal: 12, fontSize: 14, color: '#1B3B22', marginBottom: 14 },
  submitBtn: { height: 52, backgroundColor: '#1E5E2F', borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  submitBtnText: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
});
