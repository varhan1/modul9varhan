import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBI0sI8pwagsTcSwJilk9Ky8bihi5WkVjE",
  authDomain: "modul9-7b659.firebaseapp.com",
  projectId: "modul9-7b659",
  storageBucket: "modul9-7b659.appspot.com",
  messagingSenderId: "614543651764",
  appId: "1:614543651764:web:611fa2b4ec56498a8478e1",
  databaseURL: "https://modul9-7b659-default-rtdb.firebaseio.com", // Tambahkan ini jika menggunakan Realtime Database
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Jika sudah diinisialisasi, gunakan app yang ada
}

const FIREBASE = firebase;

export default FIREBASE;
