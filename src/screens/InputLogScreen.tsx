import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

interface InputLogScreenProps {
  onBack: () => void;
  onTabSelect: (tab: TabKey) => void;
}

interface ResourceCategory {
  id: string;
  label: string;
  emoji: string;
  defaultUnit: string;
}

const CATEGORIES: ResourceCategory[] = [
  { id: 'urea', label: 'Urea Fertilizer', emoji: '🧪', defaultUnit: 'kg' },
  { id: 'npk', label: 'NPK 19-19-19', emoji: '🌱', defaultUnit: 'kg' },
  { id: 'water', label: 'Water / Irrigation', emoji: '💧', defaultUnit: 'L' },
  { id: 'pesticide', label: 'Pesticide Spray', emoji: '🛡️', defaultUnit: 'mL' },
  { id: 'seeds', label: 'Paddy Seeds', emoji: '🌾', defaultUnit: 'kg' },
  { id: 'diesel', label: 'Tractor Fuel', emoji: '⛽', defaultUnit: 'L' },
];

const PLOTS = ['Rice Zone - North', 'Rice Zone - West', 'Vegetable Plot B', 'Wheat Field 1'];

export const InputLogScreen: React.FC<InputLogScreenProps> = ({ onBack, onTabSelect }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>(CATEGORIES[0]);
  const [selectedPlot, setSelectedPlot] = useState<string>(PLOTS[0]);
  const [quantity, setQuantity] = useState<string>('25');
  const [recentLogs, setRecentLogs] = useState([
    { id: '1', name: 'Urea Fertilizer', qty: '25 kg', plot: 'Rice Zone - North', time: 'Today, 09:30 AM' },
    { id: '2', name: 'Pesticide Spray', qty: '500 mL', plot: 'Vegetable Plot B', time: 'Yesterday, 04:15 PM' },
    { id: '3', name: 'Water / Irrigation', qty: '1200 L', plot: 'Rice Zone - West', time: '13 Oct, 08:00 AM' },
  ]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRecordUsage = () => {
    if (!quantity || isNaN(Number(quantity))) {
      return;
    }
    const newLog = {
      id: Date.now().toString(),
      name: selectedCategory.label,
      qty: `${quantity} ${selectedCategory.defaultUnit}`,
      plot: selectedPlot,
      time: 'Just now',
    };
    setRecentLogs([newLog, ...recentLogs]);
    setSuccessMessage(`Recorded ${quantity} ${selectedCategory.defaultUnit} of ${selectedCategory.label} for ${selectedPlot}`);
    setTimeout(() => setSuccessMessage(null), 3500);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header showBack={true} onBackPress={onBack} onNavigateProfile={() => onTabSelect('Profile')} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>{t('inputLogTitle') || 'FARM RESOURCE INPUT LOG'}</Text>

        {successMessage && (
          <View style={styles.successBanner}>
            <Text style={styles.successEmoji}>✅</Text>
            <Text style={styles.successText}>{successMessage}</Text>
          </View>
        )}

        {/* Input Category Chips */}
        <Text style={styles.sectionTitle}>Select Input Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsScroll}>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory.id === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                activeOpacity={0.85}
                style={[styles.chip, isSelected && styles.chipActive]}
                onPress={() => {
                  setSelectedCategory(cat);
                  setQuantity('25');
                }}
              >
                <Text style={styles.chipEmoji}>{cat.emoji}</Text>
                <Text style={[styles.chipText, isSelected && styles.chipTextActive]}>
                  {cat.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Entry Card */}
        <View style={styles.card}>
          <Text style={styles.label}>Target Field / Plot</Text>
          <View style={styles.plotContainer}>
            {PLOTS.map((plot) => (
              <TouchableOpacity
                key={plot}
                activeOpacity={0.8}
                style={[styles.plotBtn, selectedPlot === plot && styles.plotBtnActive]}
                onPress={() => setSelectedPlot(plot)}
              >
                <Text style={[styles.plotText, selectedPlot === plot && styles.plotTextActive]}>
                  {plot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Quantity Used ({selectedCategory.defaultUnit})</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.quantityInput}
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
              placeholder="0"
            />
            <View style={styles.unitBadge}>
              <Text style={styles.unitText}>{selectedCategory.defaultUnit}</Text>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.85} style={styles.submitBtn} onPress={handleRecordUsage}>
            <Text style={styles.submitBtnText}>Record Usage Log ➔</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Usage Logs */}
        <Text style={styles.sectionTitle}>Recent Resource Logs</Text>
        <View style={styles.historyContainer}>
          {recentLogs.map((log) => (
            <View key={log.id} style={styles.historyCard}>
              <View style={styles.historyIconCircle}>
                <Text style={styles.historyEmoji}>📦</Text>
              </View>
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>{log.name}</Text>
                <Text style={styles.historySubtitle}>{log.plot} • {log.time}</Text>
              </View>
              <View style={styles.qtyBadge}>
                <Text style={styles.qtyBadgeText}>{log.qty}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNavBar activeTab="Home" onSelectTab={onTabSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#F5F7F5' },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 16 },
  pageTitle: { fontSize: 16, fontWeight: '900', color: '#1E5E2F', textAlign: 'center', marginBottom: 16, letterSpacing: 0.8 },
  successBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  successEmoji: { fontSize: 18, marginRight: 8 },
  successText: { fontSize: 13, fontWeight: '700', color: '#1E5E2F', flex: 1 },
  sectionTitle: { fontSize: 12, fontWeight: '800', color: '#657766', letterSpacing: 0.8, marginBottom: 10, marginTop: 6 },
  chipsScroll: { marginBottom: 16 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  chipActive: {
    backgroundColor: '#1E5E2F',
    borderColor: '#1E5E2F',
  },
  chipEmoji: { fontSize: 16, marginRight: 6 },
  chipText: { fontSize: 13, fontWeight: '700', color: '#1B3B22' },
  chipTextActive: { color: '#FFFFFF' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, borderWidth: 1, borderColor: '#E6EFE7', marginBottom: 20 },
  label: { fontSize: 12, fontWeight: '800', color: '#657766', marginBottom: 8, textTransform: 'uppercase' },
  plotContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  plotBtn: {
    backgroundColor: '#F5F7F5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  plotBtnActive: { backgroundColor: '#E8F5E9', borderColor: '#1E5E2F' },
  plotText: { fontSize: 12, fontWeight: '700', color: '#657766' },
  plotTextActive: { color: '#1E5E2F', fontWeight: '800' },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  quantityInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#E6EFE7',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    fontWeight: '800',
    color: '#1B3B22',
    backgroundColor: '#FAFAFA',
  },
  unitBadge: {
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  unitText: { fontSize: 14, fontWeight: '800', color: '#1E5E2F' },
  submitBtn: { height: 50, backgroundColor: '#1E5E2F', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  submitBtnText: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
  historyContainer: { marginBottom: 20 },
  historyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  historyIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  historyEmoji: { fontSize: 18 },
  historyContent: { flex: 1 },
  historyTitle: { fontSize: 14, fontWeight: '800', color: '#1B3B22' },
  historySubtitle: { fontSize: 11, color: '#657766', marginTop: 2 },
  qtyBadge: { backgroundColor: '#E8F5E9', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  qtyBadgeText: { fontSize: 12, fontWeight: '800', color: '#1E5E2F' },
});

