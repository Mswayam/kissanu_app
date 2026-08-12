import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';

interface NotificationsOfflineScreenProps {
  onBack: () => void;
  onTabSelect: (tab: TabKey) => void;
}

interface NotificationItem {
  id: string;
  type: 'task' | 'weather' | 'sync' | 'attendance';
  title: string;
  time: string;
  body: string;
  icon: string;
  unread: boolean;
}

export const NotificationsOfflineScreen: React.FC<NotificationsOfflineScreenProps> = ({
  onBack,
  onTabSelect,
}) => {
  const { t } = useLanguage();
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      type: 'task',
      title: 'New Task Assigned: Irrigating Crops',
      time: 'Today, 07:30 AM',
      body: 'Irrigating Crops scheduled for Rice Zone - North at 08:00 AM.',
      icon: '📋',
      unread: true,
    },
    {
      id: '2',
      type: 'weather',
      title: 'Rain Advisory: Heavy Rainfall Expected',
      time: 'Today, 06:00 AM',
      body: 'Expected rainfall of 15mm in Sector 4B around 03:00 PM. Plan fertilizer tasks accordingly.',
      icon: '🌧️',
      unread: true,
    },
    {
      id: '3',
      type: 'attendance',
      title: 'Attendance Recorded',
      time: 'Today, 08:05 AM',
      body: 'Checked in at sector GPS 18.5204° N, 73.8567° E.',
      icon: '✅',
      unread: false,
    },
    {
      id: '4',
      type: 'sync',
      title: 'Offline Logs Synced',
      time: 'Yesterday, 07:15 PM',
      body: '2 Voice Statements and 1 Photo Proof synced to farm server.',
      icon: '⚡',
      unread: false,
    },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header showBack={true} onBackPress={onBack} onNavigateProfile={() => onTabSelect('Profile')} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>{t('notificationsTitle') || 'NOTIFICATIONS & OFFLINE SYNC'}</Text>

        {/* Offline Status Banner */}
        <View style={styles.banner}>
          <View style={styles.statusDot} />
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>Offline Sync Status: Online</Text>
            <Text style={styles.bannerSubtext}>All pending farm records and voice notes are synced.</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.syncBtn}>
            <Text style={styles.syncBtnText}>Sync 🔄</Text>
          </TouchableOpacity>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Recent Notifications</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={markAllRead}>
            <Text style={styles.markReadText}>Mark all as read</Text>
          </TouchableOpacity>
        </View>

        {/* Notifications List */}
        {notifications.map((item) => (
          <View key={item.id} style={[styles.card, item.unread && styles.unreadCard]}>
            <View style={styles.cardHeader}>
              <View style={styles.iconCircle}>
                <Text style={styles.cardIcon}>{item.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.notifTitle}>{item.title}</Text>
                <Text style={styles.notifTime}>{item.time}</Text>
              </View>
              {item.unread && <View style={styles.unreadDot} />}
            </View>
            <Text style={styles.notifBody}>{item.body}</Text>
          </View>
        ))}
      </ScrollView>

      <BottomNavBar activeTab="Home" onSelectTab={onTabSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#F5F7F5' },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 16 },
  pageTitle: { fontSize: 16, fontWeight: '900', color: '#1E5E2F', textAlign: 'center', marginBottom: 16, letterSpacing: 0.8 },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: 14,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  statusDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#00BFA5', marginRight: 10 },
  bannerTitle: { fontSize: 13, fontWeight: '800', color: '#1E5E2F' },
  bannerSubtext: { fontSize: 11, color: '#657766', marginTop: 2 },
  syncBtn: { backgroundColor: '#FFFFFF', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10, borderWidth: 1, borderColor: '#C8E6C9' },
  syncBtnText: { fontSize: 11, fontWeight: '800', color: '#1E5E2F' },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 12, fontWeight: '800', color: '#657766', letterSpacing: 0.8 },
  markReadText: { fontSize: 12, fontWeight: '700', color: '#1E5E2F' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 14, borderWidth: 1, borderColor: '#E6EFE7', marginBottom: 12 },
  unreadCard: { borderColor: '#A5D6A7', backgroundColor: '#FAFFFA' },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  iconCircle: { width: 36, height: 36, borderRadius: 10, backgroundColor: '#E8F5E9', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  cardIcon: { fontSize: 16 },
  notifTitle: { fontSize: 14, fontWeight: '800', color: '#1B3B22' },
  notifTime: { fontSize: 11, color: '#657766', marginTop: 2 },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#1E5E2F', marginLeft: 6 },
  notifBody: { fontSize: 13, color: '#657766', lineHeight: 18 },
});

