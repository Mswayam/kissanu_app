import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';

interface SwipeCheckInButtonProps {
  mode: 'check-in' | 'check-out';
  onSwipeComplete: () => void;
  isCompleted?: boolean;
}

export const SwipeCheckInButton: React.FC<SwipeCheckInButtonProps> = ({
  mode,
  onSwipeComplete,
  isCompleted = false,
}) => {
  const { t } = useLanguage();
  const [completed, setCompleted] = useState<boolean>(isCompleted);
  const pan = useRef(new Animated.Value(0)).current;

  // Track max slide width
  const trackWidth = 280;
  const thumbSize = 46;
  const maxSlide = trackWidth - thumbSize - 12;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (completed) return;
        const newX = Math.max(0, Math.min(gestureState.dx, maxSlide));
        pan.setValue(newX);
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (completed) return;
        if (gestureState.dx >= maxSlide * 0.6) {
          // Complete swipe animation
          Animated.timing(pan, {
            toValue: maxSlide,
            duration: 150,
            useNativeDriver: false,
          }).start(() => {
            setCompleted(true);
            onSwipeComplete();
          });
        } else {
          // Reset thumb to start
          Animated.spring(pan, {
            toValue: 0,
            friction: 5,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const isCheckIn = mode === 'check-in';
  const themeColor = isCheckIn ? '#1E5E2F' : '#D32F2F';

  return (
    <View style={[styles.track, { backgroundColor: themeColor }]}>
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [{ translateX: pan }],
            backgroundColor: completed ? '#00BFA5' : '#FFFFFF',
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Text style={[styles.arrowText, { color: completed ? '#FFFFFF' : themeColor }]}>
          {completed ? '✓' : '➔'}
        </Text>
      </Animated.View>

      <Text style={styles.trackText}>
        {completed
          ? isCheckIn
            ? t('youAreCheckedIn')
            : 'Checked Out Successfully!'
          : isCheckIn
          ? 'SLIDE TO CHECK IN ➔'
          : 'SLIDE TO CHECK OUT ➔'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  thumb: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },
  arrowText: {
    fontSize: 20,
    fontWeight: '900',
  },
  trackText: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    paddingRight: 20,
  },
});
