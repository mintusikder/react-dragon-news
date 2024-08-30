// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgKUrEeI9zRTr0LTXsoGgTzQw54o-Sts8",
  authDomain: "react-dragon-news-6b0c9.firebaseapp.com",
  projectId: "react-dragon-news-6b0c9",
  storageBucket: "react-dragon-news-6b0c9.appspot.com",
  messagingSenderId: "384135222148",
  appId: "1:384135222148:web:4384983418ba3bda2143d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth