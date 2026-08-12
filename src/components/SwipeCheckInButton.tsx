import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

interface SwipeCheckInButtonProps {
  onCheckInComplete: () => void;
}

export const SwipeCheckInButton: React.FC<SwipeCheckInButtonProps> = ({ onCheckInComplete }) => {
  const { t } = useLanguage();
  const [swiped, setSwiped] = useState<boolean>(false);

  const handlePress = () => {
    setSwiped(true);
    setTimeout(() => {
      onCheckInComplete();
    }, 400);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.track}
      onPress={handlePress}
    >
      <View style={[styles.thumb, swiped && styles.thumbSwiped]}>
        <Text style={styles.arrowText}>{swiped ? '✓' : '➔'}</Text>
      </View>
      <Text style={styles.trackText}>
        {swiped ? t('youAreCheckedIn') : t('swipeToCheckIn')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  track: {
    height: 56,
    backgroundColor: '#1E5E2F',
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    position: 'relative',
    overflow: 'hidden',
  },
  thumb: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbSwiped: {
    backgroundColor: '#00BFA5',
  },
  arrowText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1E5E2F',
  },
  trackText: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginRight: 20,
  },
});
