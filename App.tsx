import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LanguageProvider, useLanguage } from './src/context/LanguageContext';
import { WelcomeLanguageScreen } from './src/screens/WelcomeLanguageScreen';
import { MobileLoginScreen } from './src/screens/MobileLoginScreen';
import { OtpVerificationScreen } from './src/screens/OtpVerificationScreen';
import { PermissionsScreen } from './src/screens/PermissionsScreen';
import { DashboardHomeScreen } from './src/screens/DashboardHomeScreen';
import { TodaysTasksScreen } from './src/screens/TodaysTasksScreen';
import { TaskDetailsScreen } from './src/screens/TaskDetailsScreen';
import { TaskInProgressScreen } from './src/screens/TaskInProgressScreen';
import { CompleteTaskScreen } from './src/screens/CompleteTaskScreen';
import { PhotoProofScreen } from './src/screens/PhotoProofScreen';
import { VoiceProofScreen } from './src/screens/VoiceProofScreen';
import { VoiceNoteOptionalScreen } from './src/screens/VoiceNoteOptionalScreen';
import { SubmitProofScreen } from './src/screens/SubmitProofScreen';
import { SubmissionSuccessScreen } from './src/screens/SubmissionSuccessScreen';
import { AttendanceCheckInScreen } from './src/screens/AttendanceCheckInScreen';
import { AttendanceCheckOutScreen } from './src/screens/AttendanceCheckOutScreen';
import { VoiceActivityLogScreen } from './src/screens/VoiceActivityLogScreen';
import { InputLogScreen } from './src/screens/InputLogScreen';
import { NotificationsOfflineScreen } from './src/screens/NotificationsOfflineScreen';
import { FarmerProfileScreen, UserProfile } from './src/screens/FarmerProfileScreen';
import { NewRegistrationScreen, NewUser } from './src/screens/NewRegistrationScreen';
import { TabKey } from './src/components/BottomNavBar';

function MainNavigator() {
  const { t } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [completed, setCompleted] = useState<boolean>(false);
  const [isCheckedIn, setIsCheckedIn] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<UserProfile>({
    name: 'Swayam Mhaske',
    phone: '+91 98765 43210',
    location: 'Sector 4B, Kisaanu Farm',
    crop: 'Paddy (Rice)',
  });

  const handleTabSelect = (tabKey: TabKey) => {
    if (tabKey === 'Home') setCurrentScreen(5);
    if (tabKey === 'Tasks') setCurrentScreen(6);
    if (tabKey === 'Voice') setCurrentScreen(17);
    if (tabKey === 'Attendance') setCurrentScreen(isCheckedIn ? 15 : 16);
    if (tabKey === 'Profile') setCurrentScreen(20);
  };

  const handleLogout = () => {
    setCurrentScreen(1);
  };

  const renderScreen = () => {
    if (completed) {
      return (
        <View style={styles.completedContainer}>
          <Text style={styles.completedIcon}>🎉</Text>
          <Text style={styles.completedTitle}>{t('completedTitle')}</Text>
          <Text style={styles.completedSubtitle}>{t('completedSubtitle')}</Text>
          <TouchableOpacity
            style={styles.restartBtn}
            onPress={() => {
              setCompleted(false);
              setCurrentScreen(1);
            }}
          >
            <Text style={styles.restartBtnText}>{t('restartDemo')}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    switch (currentScreen) {
      case 1:
        return (
          <WelcomeLanguageScreen
            onNext={() => setCurrentScreen(2)}
            onRegister={() => setCurrentScreen(21)}
          />
        );
      case 2:
        return (
          <MobileLoginScreen
            onNext={() => setCurrentScreen(3)}
            onBack={() => setCurrentScreen(1)}
          />
        );
      case 3:
        return (
          <OtpVerificationScreen
            onNext={() => setCurrentScreen(4)}
            onBack={() => setCurrentScreen(2)}
          />
        );
      case 4:
        return (
          <PermissionsScreen
            onFinish={() => setCurrentScreen(5)}
            onBack={() => setCurrentScreen(3)}
          />
        );
      case 5:
        return (
          <DashboardHomeScreen
            onNavigate={(screenId: number) => setCurrentScreen(screenId)}
            onTabSelect={handleTabSelect}
          />
        );
      case 6:
        return (
          <TodaysTasksScreen
            onNavigate={(screenId: number) => setCurrentScreen(screenId)}
            onTabSelect={handleTabSelect}
          />
        );
      case 7:
        return (
          <TaskDetailsScreen
            onNext={() => setCurrentScreen(8)}
            onBack={() => setCurrentScreen(6)}
            onTabSelect={handleTabSelect}
          />
        );
      case 8:
        return (
          <TaskInProgressScreen
            onFinish={() => setCurrentScreen(9)}
            onBack={() => setCurrentScreen(7)}
            onTabSelect={handleTabSelect}
          />
        );
      case 9:
        return (
          <CompleteTaskScreen
            onYesCompleted={() => setCurrentScreen(10)}
            onNotYet={() => setCurrentScreen(8)}
            onStopTask={() => setCurrentScreen(6)}
            onTabSelect={handleTabSelect}
          />
        );
      case 10:
        return (
          <PhotoProofScreen
            onNext={() => setCurrentScreen(11)}
            onBack={() => setCurrentScreen(9)}
          />
        );
      case 11:
        return (
          <VoiceProofScreen
            onStartVoice={() => setCurrentScreen(12)}
            onCancel={() => setCurrentScreen(9)}
            onBack={() => setCurrentScreen(10)}
          />
        );
      case 12:
        return (
          <VoiceNoteOptionalScreen
            onFinish={() => setCurrentScreen(13)}
            onBack={() => setCurrentScreen(11)}
          />
        );
      case 13:
        return (
          <SubmitProofScreen
            onSubmit={() => setCurrentScreen(14)}
            onBack={() => setCurrentScreen(12)}
          />
        );
      case 14:
        return (
          <SubmissionSuccessScreen
            onOkay={() => setCurrentScreen(15)}
            onHome={() => setCurrentScreen(5)}
          />
        );
      case 15:
        return (
          <AttendanceCheckInScreen
            onNavigateProfile={() => setCurrentScreen(20)}
            onNavigateToCheckOut={() => {
              setIsCheckedIn(false);
              setCurrentScreen(16);
            }}
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 16:
        return (
          <AttendanceCheckOutScreen
            onCheckOut={() => {
              setIsCheckedIn(true);
              setCurrentScreen(15);
            }}
            onBack={() => setCurrentScreen(15)}
            onTabSelect={handleTabSelect}
          />
        );
      case 17:
        return (
          <VoiceActivityLogScreen
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 18:
        return (
          <InputLogScreen
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 19:
        return (
          <NotificationsOfflineScreen
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 20:
        return (
          <FarmerProfileScreen
            user={currentUser}
            onLogout={handleLogout}
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 21:
        return (
          <NewRegistrationScreen
            onRegisterSuccess={(newUser: NewUser) => {
              setCurrentUser(newUser);
              setCurrentScreen(4);
            }}
            onBack={() => setCurrentScreen(1)}
          />
        );
      default:
        return (
          <WelcomeLanguageScreen
            onNext={() => setCurrentScreen(2)}
            onRegister={() => setCurrentScreen(21)}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7F5" />
      {renderScreen()}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <MainNavigator />
      </LanguageProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F5',
  },
  completedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  completedIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  completedTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1E5E2F',
    marginBottom: 8,
  },
  completedSubtitle: {
    fontSize: 14,
    color: '#657766',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  restartBtn: {
    backgroundColor: '#1E5E2F',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
  },
  restartBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
