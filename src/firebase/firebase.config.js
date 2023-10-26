// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNJ4iM_4NjOic0iiskigc-Nu_XND7UM9I",
  authDomain: "car-dector-website-client.firebaseapp.com",
  projectId: "car-dector-website-client",
  storageBucket: "car-dector-website-client.appspot.com",
  messagingSenderId: "1056744963456",
  appId: "1:1056744963456:web:a24acad6179b5c48871565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app