var firebaseConfig = {
    apiKey: "AIzaSyBoqgldEzlobMPNuvFU_HU-lGt7tYpbaK8",
    authDomain: "mav2025-bd18e.firebaseapp.com",
    databaseURL: "https://mav2025-bd18e-default-rtdb.firebaseio.com",
    projectId: "mav2025-bd18e",
    storageBucket: "mav2025-bd18e.firebasestorage.app",
    messagingSenderId: "439845573858",
    appId: "1:439845573858:web:2f0a76db59be59c9e33abb",
    measurementId: "G-CP0WCTVQWF"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
} else {
    console.log('Firebase already initialized');
}