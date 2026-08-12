# Kisaanu Nexus - Production React Native (iOS Physical iPhone)

A mobile application for **Kisaanu Nexus** (Agricultural Farm Management & Worker Tracking), built with **React Native (CLI)** and **TypeScript** specifically targeted for execution on a **physical iPhone connected via USB**.

---

## 📱 Target Platform
- **Primary Target**: **Physical iPhone via USB**
- **Framework**: React Native CLI (Bare React Native + TypeScript) - No Expo
- **iOS Deployment**: Xcode / CocoaPods / USB Tethering

---

## 📂 Project Structure

```
k-app/
├── App.tsx                        # Root app entry with navigator & state providers
├── index.js                       # AppRegistry registration
├── app.json                       # App configuration
├── babel.config.js                # Babel preset config
├── metro.config.js                # Metro bundler config
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript strict settings
├── ios/                           # Native iOS Project
│   ├── Podfile                    # iOS CocoaPods dependency management
│   └── KisaanuNexus/
│       └── Info.plist             # iOS permissions (Location, Camera, Mic)
└── src/
    ├── components/                # Shared UI Components
    │   ├── Header.tsx             # Brand header with logo, language switcher, avatar
    │   ├── BottomNavBar.tsx       # iOS bottom navigation bar with active highlights
    │   ├── OtpInput.tsx           # 6-box pin entry component
    │   ├── SwipeCheckInButton.tsx # Interactive check-in button
    │   ├── LanguageToggle.tsx     # English / Hindi language switcher
    │   └── Icons.tsx              # Vector & UI icon definitions
    ├── context/
    │   └── LanguageContext.tsx    # Multilingual Context Provider (i18n)
    ├── i18n/
    │   └── translations.ts        # English & Hindi dictionary
    ├── theme/
    │   ├── colors.ts              # Exact palette (#1E5E2F, #E8F5E9, #2E7D32)
    │   ├── typography.ts          # Native font styles and sizes
    │   ├── spacing.ts             # Margins, paddings, border radii, drop shadows
    │   └── index.ts               # Theme exports
    └── screens/                   # 21 Application Screens
        ├── WelcomeLanguageScreen.tsx
        ├── MobileLoginScreen.tsx
        ├── OtpVerificationScreen.tsx
        ├── PermissionsScreen.tsx
        ├── DashboardHomeScreen.tsx
        ├── TodaysTasksScreen.tsx
        ├── TaskDetailsScreen.tsx
        ├── TaskInProgressScreen.tsx
        ├── CompleteTaskScreen.tsx
        ├── PhotoProofScreen.tsx
        ├── VoiceProofScreen.tsx
        ├── VoiceNoteOptionalScreen.tsx
        ├── SubmitProofScreen.tsx
        ├── SubmissionSuccessScreen.tsx
        ├── AttendanceCheckInScreen.tsx
        ├── AttendanceCheckOutScreen.tsx
        ├── VoiceActivityLogScreen.tsx
        ├── InputLogScreen.tsx
        ├── NotificationsOfflineScreen.tsx
        ├── FarmerProfileScreen.tsx
        └── NewRegistrationScreen.tsx
```

---

## 🚀 iPhone USB Setup & Launch Guide

### Step 1: Install Dependencies
Run the following command in the `k-app` directory:
```bash
npm install
```

### Step 2: Install iOS Pods
Navigate to the `ios` folder and run CocoaPods installation:
```bash
cd ios
pod install
cd ..
```

### Step 3: Connect Your iPhone via USB
1. Plug your **physical iPhone** into your computer using a Lightning / USB-C cable.
2. If prompted on your iPhone, tap **Trust This Computer** and enter your passcode.
3. Verify your device is recognized by running:
   ```bash
   xcrun xctrace list devices
   ```

### Step 4: Start Metro Bundler
Start the Metro development server in your project root:
```bash
npx react-native start
```

### Step 5: Run App on Connected Physical iPhone
In a separate terminal window, launch the build targeting your connected iPhone:
```bash
npx react-native run-ios --device "Your iPhone Name"
```
*(Replace `"Your iPhone Name"` with your actual device name as seen in Settings > General > About > Name).*

---

## 🧪 Testing Checklist
- [x] **Safe Area & Notch**: Tested with `SafeAreaView` and top/bottom paddings for Dynamic Island & Home Indicator.
- [x] **Navigation & Flow**: Complete 21-screen workflow (Language → Login → OTP → Permissions → Dashboard → Tasks → Proof Upload → Attendance Check-In/Out → Profile).
- [x] **Bilingual Support**: Dynamic toggle between English and Hindi across all UI text strings.
- [x] **Keyboard Avoidance**: `KeyboardAvoidingView` enabled on login and task note screens.
