/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* YOUR FIREBASE CONFIGURATION OBJECT  */
  apiKey: "AIzaSyDg94klx12Hv4700gnq7nP6NsmgzAmZvLI",
  authDomain: "friendlychat-ee89e.firebaseapp.com",
  projectId: "friendlychat-ee89e",
  storageBucket: "friendlychat-ee89e.appspot.com",
  messagingSenderId: "648794435852",
  appId: "1:648794435852:web:3abc01908db1def9111929"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}