// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Woy_rQqD2wNYzfnnuHtwkMfw1FCSdmw",
  authDomain: "react-disney-plus-app-b63e0.firebaseapp.com",
  projectId: "react-disney-plus-app-b63e0",
  storageBucket: "react-disney-plus-app-b63e0.appspot.com",
  messagingSenderId: "498622332914",
  appId: "1:498622332914:web:201ce5b9330ef28429356b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;