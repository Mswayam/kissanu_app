# 🌾 Kisaanu Nexus (k-app) — Farm Management & Worker Tracking Mobile App

[![React Native](https://img.shields.io/badge/React_Native-0.72.6-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Target Platform](https://img.shields.io/badge/Target-Physical_iPhone_(iOS_USB)-black?logo=apple&logoColor=white)](https://developer.apple.com/)
[![Bilingual](https://img.shields.io/badge/i18n-English_%7C_हिन्दी-1E5E2F)](https://github.com/Mswayam/kissanu_app)

**Kisaanu Nexus** is a production-grade, bilingual mobile application built with **React Native (CLI)** and **TypeScript**, specifically designed for agricultural farm management, worker task tracking, voice statement recording, photo proof submissions, attendance check-in/out, and resource input logging.

---

## 📸 Key Features & Screen Workflows

- **🌐 Multilingual Engine (i18n)**: Seamless dynamic switching between **English** and **Hindi (हिन्दी)** across all 21 app screens.
- **📱 21 Complete Mobile Screens**:
  1. `WelcomeLanguageScreen` — Language selection (EN / HI) & Account registration link.
  2. `MobileLoginScreen` — 10-digit mobile authentication interface with security badges.
  3. `OtpVerificationScreen` — 6-box PIN entry with resend timer.
  4. `PermissionsScreen` — Location, Camera, and Microphone grant workflows.
  5. `DashboardHomeScreen` — Overview metrics, assigned tasks counter, attendance status & quick action shortcuts.
  6. `TodaysTasksScreen` — Active vs Completed task tabs with field detail tags.
  7. `TaskDetailsScreen` — Instructions, voice guidance audio preview, and proof requirements.
  8. `TaskInProgressScreen` — Progress timer, text field notes, and completion triggers.
  9. `CompleteTaskScreen` — Task verification dialogue.
  10. `PhotoProofScreen` — Viewfinder simulator with frame overlays.
  11. `VoiceProofScreen` — Audio statement recorder & attachment checklist.
  12. `VoiceNoteOptionalScreen` — Real-time waveform audio visualizer & timer.
  13. `SubmitProofScreen` — Summary of attached photo + voice proof items.
  14. `SubmissionSuccessScreen` — Celebration badge & dashboard return flow.
  15. `AttendanceCheckInScreen` — GPS location map card & interactive swipe-to-check-in.
  16. `AttendanceCheckOutScreen` — Daily work hours counter & check-out verification.
  17. `VoiceActivityLogScreen` — Audio log transcripts & playback controller.
  18. `InputLogScreen` — Resource tracking for Fertilizers (Urea, NPK), Water, Seeds, Fuel, and Pesticides across farm plots.
  19. `NotificationsOfflineScreen` — Offline data sync status & push notifications center.
  20. `FarmerProfileScreen` — Farmer user profile, farm location details, crop configuration, and account sign-out.
  21. `NewRegistrationScreen` — Onboarding form for new farm workers.

---

## 🛠️ Technology Stack

- **Framework**: React Native CLI 0.72.6 (Bare React Native — No Expo)
- **Language**: TypeScript 5.0 (Strict mode enabled)
- **Navigation & Layout**: `SafeAreaView`, `KeyboardAvoidingView`, Custom Navigation State
- **Localization**: Custom Context API-based i18n (`LanguageContext.tsx`)
- **Theme**: Tailored Agricultural Green Palette (`#1E5E2F`, `#2E7D32`, `#E8F5E9`, `#00BFA5`)

---

## 📂 Project Structure

```
k-app/
├── App.tsx                        # Root app entry, navigator & state providers
├── index.js                       # AppRegistry entry point
├── package.json                   # Project dependencies & scripts
├── tsconfig.json                  # Strict TypeScript configuration
├── babel.config.js                # Babel preset configuration
├── metro.config.js                # Metro bundler config
├── ios/                           # Native iOS Xcode Project & Podfile
└── src/
    ├── components/                # Reusable UI Components
    │   ├── Header.tsx             # App brand header with language toggle & avatar
    │   ├── BottomNavBar.tsx       # Bottom navigation bar with tab highlights
    │   ├── OtpInput.tsx           # 6-digit PIN input component
    │   ├── SwipeCheckInButton.tsx # Swipe-to-check-in component
    │   ├── LanguageToggle.tsx     # English / Hindi switcher pill
    │   └── Icons.tsx              # Vector & standard UI icons
    ├── context/
    │   └── LanguageContext.tsx    # Multilingual Context Provider
    ├── i18n/
    │   └── translations.ts        # English & Hindi translation dictionaries
    ├── theme/
    │   ├── colors.ts              # Green color palette tokens
    │   ├── typography.ts          # Native font typography
    │   ├── spacing.ts             # Padding, margin & radius constants
    │   └── index.ts               # Theme exports
    └── screens/                   # 21 Application Screen Components
```

---

## 🚀 Step-by-Step Installation & Setup Guide

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn**
- **CocoaPods** (for iOS dependencies, macOS only)
- **Xcode** (for physical iPhone USB deployment)

### 2. Clone the Repository
```bash
git clone https://github.com/Mswayam/kissanu_app.git
cd kissanu_app
```

### 3. Install NPM Dependencies
```bash
npm install
```

### 4. Install iOS CocoaPods (macOS / iOS Target)
```bash
cd ios
pod install
cd ..
```

---

## ⚡ Running the Application

### Option A: Run on Connected Physical iPhone (USB)
1. Plug your **physical iPhone** into your Mac via USB / Lightning cable.
2. Tap **Trust This Computer** on your iPhone if prompted.
3. Start the Metro Development Server:
   ```bash
   npx react-native start
   ```
4. In a separate terminal window, launch the app targeting your device:
   ```bash
   npx react-native run-ios --device "Your iPhone Name"
   ```
   *(Replace `"Your iPhone Name"` with your actual device name from **Settings > General > About > Name**).*

### Option B: Run on iOS Simulator (macOS)
```bash
npx react-native run-ios
```

### Option C: Run on Android Device / Emulator
```bash
npm run android
```

### Option D: Run in Web Browser (React Native Web)
To run the full app directly in your desktop browser:
```bash
npm run web
```
This launches Webpack dev server on **`http://localhost:3000`** with a responsive mobile device frame preview.

---

## 🧪 Code Quality & Verification Commands

To verify TypeScript compilation and ensure zero type errors across the codebase:
```bash
npm run lint
```

---

## 📤 Pushing Changes to GitHub

If you make modifications and want to push updates to GitHub:

```bash
git add .
git commit -m "Update application features"
git push origin main
```

---

## 📄 License
This project is proprietary and maintained for **Kisaanu Nexus**.