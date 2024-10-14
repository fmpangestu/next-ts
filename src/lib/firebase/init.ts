// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.MYAPP_API_KEY,
  authDomain: process.env.MYAPP_AUTH_DOMAIN,
  projectId: process.env.MYAPP_PROJECT_ID,
  storageBucket: process.env.MYAPP_STORAGE_BUCKET,
  messagingSenderId: process.env.MYAPP_MESSAGING_SENDER_ID,
  appId: process.env.MYAPP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
