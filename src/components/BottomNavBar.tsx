import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

export type TabKey = 'Home' | 'Tasks' | 'Voice' | 'Attendance' | 'Profile';

interface BottomNavBarProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onSelectTab }) => {
  const { t } = useLanguage();

  const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'Home', label: t('tabHome'), icon: '🏠' },
    { key: 'Tasks', label: t('tabTasks'), icon: '📋' },
    { key: 'Voice', label: t('tabVoice'), icon: '🎙️' },
    { key: 'Attendance', label: t('tabAttendance'), icon: '📅' },
    { key: 'Profile', label: t('tabProfile'), icon: '👤' },
  ];

  return (
    <View style={styles.navBarContainer}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            activeOpacity={0.7}
            style={styles.tabItem}
            onPress={() => onSelectTab(tab.key)}
          >
            <View style={[styles.iconWrapper, isActive && styles.activeIconWrapper]}>
              <Text style={[styles.iconText, isActive && styles.activeIconText]}>{tab.icon}</Text>
            </View>
            <Text style={[styles.label, isActive ? styles.activeLabel : styles.inactiveLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    height: 64,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E6EFE7',
    paddingBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  activeIconWrapper: {
    backgroundColor: '#E8F5E9',
  },
  iconText: {
    fontSize: 18,
    opacity: 0.6,
  },
  activeIconText: {
    opacity: 1,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#1E5E2F',
    fontWeight: '800',
  },
  inactiveLabel: {
    color: '#657766',
  },
});
