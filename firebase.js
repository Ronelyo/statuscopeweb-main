
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD-adYSJq5Klknat97ISKmr0ZlAHZ2alqY",
    authDomain: "statuscop-web.firebaseapp.com",
    projectId: "statuscop-web",
    storageBucket: "statuscop-web.firebasestorage.app",
    messagingSenderId: "920281500094",
    appId: "1:920281500094:web:9ea6b40515e742916d11ef",
    measurementId: "G-HYXG250TDX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import {
getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField
}
from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
const db = getFirestore();

  async function AddDocument_AutoID(){
var ref = collection(db, "Accounts");
const docRef = await addDoc(
ref, {
NameofStd: NameBox.value,
RollNo: RollBox.value,
Section: SecBox.value,
Gender: GenBox.value
});

console.log("Document added with ID:", docRef.id);
}