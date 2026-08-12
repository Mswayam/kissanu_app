import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BackArrowIcon = () => (
  <View style={styles.backCircle}>
    <Text style={styles.backArrowText}>‹</Text>
  </View>
);

export const CheckmarkIcon = () => (
  <Text style={{ fontSize: 16, color: '#1E5E2F', fontWeight: 'bold' }}>✓</Text>
);

export const LocationIcon = () => (
  <Text style={{ fontSize: 18 }}>📍</Text>
);

export const CameraIcon = () => (
  <Text style={{ fontSize: 18 }}>📷</Text>
);

export const MicIcon = () => (
  <Text style={{ fontSize: 18 }}>🎙️</Text>
);

export const ClockIcon = () => (
  <Text style={{ fontSize: 14, color: '#2E7D32' }}>🕒</Text>
);

export const StarIcon = () => (
  <Text style={{ fontSize: 14, color: '#E65100' }}>⭐</Text>
);

const styles = StyleSheet.create({
  backCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrowText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1E5E2F',
    marginTop: -2,
  },
});
