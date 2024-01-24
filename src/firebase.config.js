// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2ACnHNQegWp08D6dEHUFhPHx4heZveeI',
  authDomain: 'rent-house-app-2fa4f.firebaseapp.com',
  projectId: 'rent-house-app-2fa4f',
  storageBucket: 'rent-house-app-2fa4f.appspot.com',
  messagingSenderId: '955135853026',
  appId: '1:955135853026:web:4f2a6df91a15a5a17b79bb',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
