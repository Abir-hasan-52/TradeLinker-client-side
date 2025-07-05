// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0u5aUJ7rcrBJFZakZznUsjnSl-W5227s",
  authDomain: "trade-linker-60a0f.firebaseapp.com",
  projectId: "trade-linker-60a0f",
  storageBucket: "trade-linker-60a0f.firebasestorage.app",
  messagingSenderId: "629853673343",
  appId: "1:629853673343:web:4d0882e273079f32e06c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;