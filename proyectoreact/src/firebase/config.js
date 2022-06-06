// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZrviaDymNyMyNDf4fTsGGf3TJ1zswmSo",
  authDomain: "playkira-38839.firebaseapp.com",
  projectId: "playkira-38839",
  storageBucket: "playkira-38839.appspot.com",
  messagingSenderId: "616105221053",
  appId: "1:616105221053:web:0f1aead7ebdb9aee7110d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}