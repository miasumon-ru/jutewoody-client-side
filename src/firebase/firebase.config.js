
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaErxUMlBdYN9k0BtU-W2OOOJ1vOfRfqU",
  authDomain: "assignment-ten-client-si-56d22.firebaseapp.com",
  projectId: "assignment-ten-client-si-56d22",
  storageBucket: "assignment-ten-client-si-56d22.appspot.com",
  messagingSenderId: "472825938404",
  appId: "1:472825938404:web:18e302c4b2381668db07f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth