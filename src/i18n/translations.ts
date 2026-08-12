export interface TranslationDictionary {
  [key: string]: string;
}

export interface Translations {
  en: TranslationDictionary;
  hi: TranslationDictionary;
}

export const translations: Translations = {
  en: {
    // General / Common
    brandName: "KISAANU NEXUS",
    tagline: "Let's grow together",
    back: "Back",
    languageToggle: "EN",
    cancel: "Cancel",
    okay: "Okay",
    saveChanges: "Save Changes",
    
    // Welcome & Language Screen
    chooseLanguageTitle: "Choose Your Language / भाषा चुनें",
    englishBtnLabel: "English",
    hindiBtnLabel: "हिन्दी (Hindi)",
    versionFooter: "v1.4.0 • Secured & Trusted Farm Network",
    alreadyHaveAccount: "Already registered? Sign In",
    newFarmerRegister: "New Farmer? Register Account",

    // Registration Screen
    registerTitle: "Farmer Registration",
    registerSubtitle: "Join Kisaanu Nexus to manage your farm and track work daily.",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your full name (e.g. Swayam Mhaske)",
    mobileLabel: "Mobile Number",
    villageLocationLabel: "Farm / Village Location",
    villageLocationPlaceholder: "e.g. Sector 4B, Kisaanu Farm",
    cropTypeLabel: "Primary Crop Type",
    cropPaddy: "Paddy (Rice)",
    cropWheat: "Wheat",
    cropSugarcane: "Sugarcane",
    cropCotton: "Cotton / Vegetables",
    registerSubmitBtn: "Create Account & Continue",

    // Login Screen
    welcomeBack: "Welcome Back! 👋",
    loginSubtitle: "Login using your mobile number",
    mobileNumberLabel: "Mobile Number",
    phonePlaceholder: "98765 43210",
    sendOtp: "Send OTP",
    disclaimerText: "We'll send a 6-digit verification code to your mobile number.",
    secureInfo: "Your information is 100% secure",

    // OTP Verification Screen
    verifyTitle: "Verify Your Mobile Number",
    verifySubtitlePrefix: "We sent a 6-digit code to ",
    didnReceiveCode: "Didn't receive the code?",
    resendOtp: "Resend OTP",
    verifyAndContinue: "Verify & Continue",
    wrongNumberLink: "Wrong number? Change number",

    // Permissions Screen
    allowPermissionsTitle: "Allow Permissions",
    permissionsSubtitle: "We need the following permissions to make your farm work smooth and trackable.",
    locationPermissionTitle: "Location Permission",
    locationPermissionDesc: "To mark daily attendance & record field locations.",
    cameraPermissionTitle: "Camera Permission",
    cameraPermissionDesc: "To capture work proof photos and crop issues.",
    micPermissionTitle: "Microphone Permission",
    micPermissionDesc: "To quickly record voice notes about farm tasks.",
    allowAllContinue: "Allow All & Continue",
    permissionsFooterNote: "You can change these options later in app settings.",

    // Screen 5: Dashboard Home
    goodMorningUser: "Good Morning, Suresh! 👋",
    todaysDate: "Today's date: 15 Oct, 2026",
    todaysOverview: "TODAY'S OVERVIEW",
    assignedTasks: "Assigned Tasks",
    checkedInToday: "Checked In Today",
    activeBadge: "Active",
    doneBadge: "Done",
    quickActions: "QUICK ACTIONS",
    voiceLog: "Voice Log",
    photoProof: "Photo Proof",

    // Bottom Navigation Tabs
    tabHome: "Home",
    tabTasks: "Tasks",
    tabVoice: "Voice",
    tabAttendance: "Attendance",
    tabProfile: "Profile",

    // Screen 6: Today's Tasks
    farmingTasksTitle: "FARMING TASKS",
    tabTodayCount: "Today (2)",
    tabCompleted: "Completed",
    irrigatingCrops: "Irrigating Crops",
    riceZoneNorth: "Rice Zone - North • 08:00 AM",
    fertilizerApplication: "Fertilizer Application",
    riceZoneWest: "Rice Zone - West • 11:00 AM",
    doNowBtn: "Do Now",
    earnedTrustBanner: "Complete your tasks on time and earn trust!",

    // Screen 7: Task Details
    taskDetailsTitle: "TASK DETAILS",
    pendingBadge: "Pending",
    instructionsTitle: "INSTRUCTIONS",
    instruction1Title: "Irrigate the crop as per schedule:",
    instructionPoint1: "• Check water flow in the lines",
    instructionPoint2: "• Ensure all fertilizer dispensers are active",
    instructionPoint3: "• Cover full designated area evenly",
    startTaskBtn: "Start Task",

    // Screen 8: Task In Progress
    taskInProgressTitle: "TASK IN PROGRESS",
    timeElapsed: "TIME ELAPSED",
    taskStartedTime: "Task Started: 08:15 AM",
    currentActiveTask: "CURRENT ACTIVE TASK",
    irrigationProcess: "Irrigation Process",
    locationPeaZone: "Location: Pea Zone - North",
    notesOptional: "Notes (Optional)",
    notesPlaceholder: "Add notes about your work...",
    completeTaskBtn: "Complete Task",

    // Screen 9: Complete Task
    taskCompleteTitle: "TASK COMPLETE",
    confirmCompletionTitle: "Confirm Completion",
    didYouCompletePrompt: "Did you complete the task:",
    atPeaZone: "at Pea Zone - North",
    yesCompletedBtn: "Yes, Completed",
    notYetBtn: "Not Yet",
    stopTaskBtn: "Stop Task",
    stopTaskCaption: "Stop the timer and cancel current progress.",

    // Screen 10: Photo Proof
    photoProofTitle: "Photo Proof",
    isPhotoClearPrompt: "Is this photo clear?",
    yesClearBtn: "Yes, Clear",
    retakeBtn: "Retake",
    currentTaskLocationLabel: "CURRENT TASK LOCATION",
    locationIrrigationPeaZone: "Irrigation, Pea Zone - North",
    gallery: "Gallery",
    flash: "Flash",

    // Screen 11: Voice Proof
    voiceProofTitle: "Voice Proof",
    recordVoiceStatementTitle: "Record Voice Statement",
    recordVoiceStatementDesc: "Please state your name and confirm you have completed the irrigation work in the Pea Zone.",
    photoAddedBadge: "Photo Added",
    voicePendingBadge: "Voice Pending",
    areYouReadyPrompt: "Are you ready to record your statement?",
    startVoiceNoteBtn: "Start Voice Note",

    // Screen 12: Voice Note Optional
    voiceNoteOptionalTitle: "Voice Note (Optional)",
    recordShortNoteTitle: "Record a short voice note about your work",
    recordShortNoteDesc: "Explain details of crops, issues or general farm observations.",
    recordingStatus: "Recording...",
    taskIrrigationPill: "Task: Irrigation - Pea Zone - North",
    pauseRecordingBtn: "Pause Recording",
    playBackBtn: "Play Back",
    reRecordBtn: "Re-record",
    voiceNoteOptionalSubtext: "Voice note is optional • Tap Pause to finalize",

    // Screen 13: Submit Proof
    submitProofTitle: "Submit Proof",
    reviewAttachmentsTitle: "REVIEW ATTACHMENTS",
    photoAttachmentName: "Field_Proof_Photo.jpg",
    photoAttachmentSize: "Size: 1.2 MB",
    voiceAttachmentName: "Voice Note Proof (00:08)",
    farmingTaskSection: "FARMING TASK",
    taskNameIrrigation: "Irrigation - Pea Zone - North",
    submissionTimestampLabel: "SUBMISSION TIMESTAMP",
    submissionTimestampVal: "26 Jul 2026, 08:42 AM",
    submitWorkProofBtn: "Submit Work Proof",

    // Screen 14: Submission Success
    workSubmittedSuccess: "Work Submitted Successfully!",
    submissionSuccessThankYou: "Thank you! Your work has been submitted for review.",
    submissionIdLabel: "Submission ID",
    submissionIdVal: "#KN-28192",
    workDoneLabel: "Work Done",
    workDoneVal: "Irrigation Complete",
    backToHome: "Back to Home",

    // Screen 15 & 16: Attendance Check In / Out
    todaysAttendanceTitle: "TODAY'S ATTENDANCE",
    checkOutHeaderTitle: "CHECK-OUT",
    youAreCheckedIn: "You are Checked In",
    checkInTimeLabel: "CHECK-IN TIME",
    checkInTimeVal: "08:05 AM",
    dateVal: "Date: 26 July, 2026",
    verifiedLocationLabel: "VERIFIED LOCATION",
    locationFoliageField: "Foliage Field Sec 4B, Kisaanu Farm",
    youAreHerePin: "You are here",
    gpsNoticeText: "Your location was automatically verified during check-in. This app uses secure GPS verification for reliable records.",
    checkInTimeTodayLabel: "Check-in time today",
    currentTimeLabel: "Current Time",
    currentTimeVal: "06:15 PM",
    checkOutLocationLabel: "CHECK-OUT LOCATION",
    mainGateEntrance: "Main Gate Entrance, Sector 1",
    checkOutNowBtn: "Check-out Now",
    swipeToCheckIn: "SWIPE TO CHECK-IN",

    // Screens 17-21
    voiceActivityLogTitle: "VOICE ACTIVITY LOG",
    inputLogTitle: "FARM INPUT LOG",
    notificationsTitle: "NOTIFICATIONS & OFFLINE",
    profileTitle: "FARMER PROFILE",
    completedTitle: "Demo Completed!",
    completedSubtitle: "You have walked through the full Kisaanu Nexus flow.",
    restartDemo: "Restart Demo",
  },
  hi: {
    // General / Common
    brandName: "किसाणु नेक्सस",
    tagline: "आइए साथ मिलकर प्रगति करें",
    back: "वापस",
    languageToggle: "हिन्दी",
    cancel: "रद्द करें",
    okay: "ठीक है",
    saveChanges: "सुरक्षित करें",
    
    // Welcome & Language Screen
    chooseLanguageTitle: "Choose Your Language / भाषा चुनें",
    englishBtnLabel: "English",
    hindiBtnLabel: "हिन्दी (Hindi)",
    versionFooter: "v1.4.0 • सुरक्षित एवं विश्वसनीय कृषि नेटवर्क",
    alreadyHaveAccount: "पहले से पंजीकृत? लॉगिन करें",
    newFarmerRegister: "नए किसान? खाता बनाएं",

    // Registration Screen
    registerTitle: "किसान पंजीकरण",
    registerSubtitle: "अपने खेत का प्रबंधन और दैनिक कार्य ट्रैक करने के लिए किसाणु नेक्सस से जुड़ें।",
    fullNameLabel: "पूरा नाम",
    fullNamePlaceholder: "अपना पूरा नाम दर्ज करें (उदा. स्वयं म्हस्के)",
    mobileLabel: "मोबाइल नंबर",
    villageLocationLabel: "खेत / गांव का स्थान",
    villageLocationPlaceholder: "उदा. सेक्टर 4B, किसाणु फार्म",
    cropTypeLabel: "मुख्य फसल का प्रकार",
    cropPaddy: "धान (चावल)",
    cropWheat: "गेहूं",
    cropSugarcane: "गन्ना",
    cropCotton: "कपास / सब्जियां",
    registerSubmitBtn: "खाता बनाएं और आगे बढ़ें",

    // Login Screen
    welcomeBack: "नमस्ते, स्वागत है! 👋",
    loginSubtitle: "अपने मोबाइल नंबर से लॉगिन करें",
    mobileNumberLabel: "मोबाइल नंबर",
    phonePlaceholder: "98765 43210",
    sendOtp: "ओटीपी भेजें",
    disclaimerText: "हम आपके मोबाइल नंबर पर 6 अंकों का सत्यापन कोड भेजेंगे।",
    secureInfo: "आपकी जानकारी 100% सुरक्षित है",

    // OTP Verification Screen
    verifyTitle: "मोबाइल नंबर सत्यापित करें",
    verifySubtitlePrefix: "हमने 6 अंकों का कोड भेजा है: ",
    didnReceiveCode: "कोड नहीं मिला?",
    resendOtp: "ओटीपी पुनः भेजें",
    verifyAndContinue: "सत्यापित करें और जारी रखें",
    wrongNumberLink: "गलत नंबर? नंबर बदलें",

    // Permissions Screen
    allowPermissionsTitle: "अनुमतियां दें",
    permissionsSubtitle: "आपके खेत के काम को सुचारू और ट्रैक करने योग्य बनाने के लिए हमें अनुमतियों की आवश्यकता है।",
    locationPermissionTitle: "स्थान की अनुमति (Location)",
    locationPermissionDesc: "दैनिक उपस्थिति और खेत के स्थान दर्ज करने के लिए।",
    cameraPermissionTitle: "कैमरा अनुमति (Camera)",
    cameraPermissionDesc: "कार्य प्रमाण तस्वीरें और फसल समस्याओं को कैप्चर करने के लिए।",
    micPermissionTitle: "माइक की अनुमति (Microphone)",
    micPermissionDesc: "कृषि कार्यों के बारे में वॉइस नोट्स रिकॉर्ड करने के लिए।",
    allowAllContinue: "सभी स्वीकार करें और आगे बढ़ें",
    permissionsFooterNote: "आप इन विकल्पों को बाद में ऐप सेटिंग्स में बदल सकते हैं।",

    // Screen 5: Dashboard Home
    goodMorningUser: "शुभ प्रभात, सुरेश! 👋",
    todaysDate: "आज की तारीख: 15 अक्टूबर, 2026",
    todaysOverview: "आज का अवलोकन",
    assignedTasks: "सौंपे गए कार्य",
    checkedInToday: "आज उपस्थिति दर्ज की",
    activeBadge: "सक्रिय",
    doneBadge: "पूर्ण",
    quickActions: "त्वरित कार्रवाई",
    voiceLog: "वॉइस लॉग",
    photoProof: "फोटो प्रमाण",

    // Bottom Navigation Tabs
    tabHome: "मुख्य पृष्ठ",
    tabTasks: "कार्य",
    tabVoice: "वॉइस",
    tabAttendance: "उपस्थिति",
    tabProfile: "प्रोफ़ाइल",

    // Screen 6: Today's Tasks
    farmingTasksTitle: "कृषि कार्य list",
    tabTodayCount: "आज (2)",
    tabCompleted: "पूर्ण कार्य",
    irrigatingCrops: "फसलों की सिंचाई",
    riceZoneNorth: "धान क्षेत्र - उत्तर • 08:00 AM",
    fertilizerApplication: "उर्वरक का छिड़काव",
    riceZoneWest: "धान क्षेत्र - पश्चिम • 11:00 AM",
    doNowBtn: "अभी शुरू करें",
    earnedTrustBanner: "समय पर अपने कार्य पूरे करें और विश्वास कमाएं!",

    // Screen 7: Task Details
    taskDetailsTitle: "कार्य का विवरण",
    pendingBadge: "लंबित",
    instructionsTitle: "निर्देश",
    instruction1Title: "शीड्यूल के अनुसार फसल की सिंचाई करें:",
    instructionPoint1: "• पाइप लाइनों में पानी के बहाव की जांच करें",
    instructionPoint2: "• सुनिश्चित करें कि सभी उर्वरक डिस्पेंसर चालू हैं",
    instructionPoint3: "• पूरे निर्दिष्ट क्षेत्र को समान रूप से कवर करें",
    startTaskBtn: "कार्य शुरू करें",

    // Screen 8: Task In Progress
    taskInProgressTitle: "कार्य प्रगति पर है",
    timeElapsed: "बीता हुआ समय",
    taskStartedTime: "कार्य शुरू: 08:15 AM",
    currentActiveTask: "वर्तमान सक्रिय कार्य",
    irrigationProcess: "सिंचाई प्रक्रिया",
    locationPeaZone: "स्थान: मटर क्षेत्र - उत्तर",
    notesOptional: "टिप्पणियाँ (वैकल्पिक)",
    notesPlaceholder: "अपने कार्य के बारे में टिप्पणियाँ लिखें...",
    completeTaskBtn: "कार्य पूर्ण करें",

    // Screen 9: Complete Task
    taskCompleteTitle: "कार्य पूर्ण",
    confirmCompletionTitle: "पुष्टि करें",
    didYouCompletePrompt: "क्या आपने कार्य पूरा कर लिया है:",
    atPeaZone: "मटर क्षेत्र - उत्तर पर",
    yesCompletedBtn: "हाँ, पूरा हुआ",
    notYetBtn: "अभी नहीं",
    stopTaskBtn: "कार्य रोकें",
    stopTaskCaption: "टाइमर रोकें और वर्तमान प्रगति रद्द करें।",

    // Screen 10: Photo Proof
    photoProofTitle: "फोटो प्रमाण",
    isPhotoClearPrompt: "क्या यह फोटो स्पष्ट है?",
    yesClearBtn: "हाँ, स्पष्ट है",
    retakeBtn: "पुनः लें",
    currentTaskLocationLabel: "वर्तमान कार्य स्थान",
    locationIrrigationPeaZone: "सिंचाई, मटर क्षेत्र - उत्तर",
    gallery: "गैलरी",
    flash: "फ्लैश",

    // Screen 11: Voice Proof
    voiceProofTitle: "वॉइस प्रमाण",
    recordVoiceStatementTitle: "वॉइस बयान रिकॉर्ड करें",
    recordVoiceStatementDesc: "कृपया अपना नाम बताएं और पुष्टि करें कि आपने मटर क्षेत्र में सिंचाई का काम पूरा कर लिया है।",
    photoAddedBadge: "फोटो जोड़ी गई",
    voicePendingBadge: "वॉइस लंबित",
    areYouReadyPrompt: "क्या आप अपना बयान रिकॉर्ड करने के लिए तैयार हैं?",
    startVoiceNoteBtn: "वॉइस नोट शुरू करें",

    // Screen 12: Voice Note Optional
    voiceNoteOptionalTitle: "वॉइस नोट (वैकल्पिक)",
    recordShortNoteTitle: "अपने कार्य के बारे में एक छोटा वॉइस नोट रिकॉर्ड करें",
    recordShortNoteDesc: "फसलों, समस्याओं या सामान्य खेत अवलोकनों का विवरण दें।",
    recordingStatus: "रिकॉर्डिंग चालू है...",
    taskIrrigationPill: "कार्य: सिंचाई - मटर क्षेत्र - उत्तर",
    pauseRecordingBtn: "रिकॉर्डिंग रोकें",
    playBackBtn: "सुनें (Play)",
    reRecordBtn: "पुनः रिकॉर्ड करें",
    voiceNoteOptionalSubtext: "वॉइस नोट वैकल्पिक है • समाप्त करने के लिए रोकें दबाएं",

    // Screen 13: Submit Proof
    submitProofTitle: "प्रमाण जमा करें",
    reviewAttachmentsTitle: "संलग्नक समीक्षा",
    photoAttachmentName: "Field_Proof_Photo.jpg",
    photoAttachmentSize: "आकार: 1.2 MB",
    voiceAttachmentName: "वॉइस नोट प्रमाण (00:08)",
    farmingTaskSection: "कृषि कार्य",
    taskNameIrrigation: "सिंचाई - मटर क्षेत्र - उत्तर",
    submissionTimestampLabel: "सबमिशन समय",
    submissionTimestampVal: "26 जुलाई 2026, 08:42 AM",
    submitWorkProofBtn: "कार्य प्रमाण जमा करें",

    // Screen 14: Submission Success
    workSubmittedSuccess: "कार्य सफलतापूर्वक जमा किया गया!",
    submissionSuccessThankYou: "धन्यवाद! आपका काम समीक्षा के लिए भेज दिया गया है।",
    submissionIdLabel: "सबमिशन आईडी",
    submissionIdVal: "#KN-28192",
    workDoneLabel: "किया गया कार्य",
    workDoneVal: "सिंचाई पूर्ण",
    backToHome: "मुख्य पृष्ठ पर लौटें",

    // Screen 15 & 16: Attendance Check In / Out
    todaysAttendanceTitle: "आज की उपस्थिति",
    checkOutHeaderTitle: "चेक-आउट",
    youAreCheckedIn: "आपकी उपस्थिति दर्ज है (Checked In)",
    checkInTimeLabel: "चेक-इन का समय",
    checkInTimeVal: "08:05 AM",
    dateVal: "दिनांक: 26 जुलाई, 2026",
    verifiedLocationLabel: "सत्यापित स्थान",
    locationFoliageField: "फोलिएज फील्ड सेक 4B, किसाणु फार्म",
    youAreHerePin: "आप यहाँ हैं",
    gpsNoticeText: "चेक-इन के दौरान आपका स्थान स्वचालित रूप से सत्यापित किया गया था। यह ऐप सुरक्षित जीपीएस का उपयोग करता है।",
    checkInTimeTodayLabel: "आज चेक-इन का समय",
    currentTimeLabel: "वर्तमान समय",
    currentTimeVal: "06:15 PM",
    checkOutLocationLabel: "चेक-आउट स्थान",
    mainGateEntrance: "मेन गेट प्रवेश द्वार, सेक्टर 1",
    checkOutNowBtn: "अभी चेक-आउट करें",
    swipeToCheckIn: "स्वाइप करके चेक-इन करें",

    // Screens 17-21
    voiceActivityLogTitle: "वॉइस गतिविधि लॉग",
    inputLogTitle: "खेत इनपुट लॉग",
    notificationsTitle: "अधिसूचनाएं और ऑफ़लाइन",
    profileTitle: "किसान प्रोफाइल",
    completedTitle: "डेमो पूर्ण!",
    completedSubtitle: "आपने किसाणु नेक्सस का पूरा फ्लो देखा है।",
    restartDemo: "डेमो पुनः शुरू करें",
  },
};
