// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApaUcPcfyuMQydgCknd9GrK3HsZJbnR5E",
  authDomain: "coffee-store-fd7f1.firebaseapp.com",
  projectId: "coffee-store-fd7f1",
  storageBucket: "coffee-store-fd7f1.appspot.com",
  messagingSenderId: "808958669076",
  appId: "1:808958669076:web:42f8b7767598d060951201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;