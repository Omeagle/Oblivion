import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAP-s6wPzYFg-Au_ExvMHlEJilP5tfoCME",
  authDomain: "oblivion-eb8a2.firebaseapp.com",
  databaseURL: "https://oblivion-eb8a2.firebaseio.com",
  projectId: "oblivion-eb8a2",
  storageBucket: "oblivion-eb8a2.appspot.com",
  messagingSenderId: "138040820810",
  appId: "1:138040820810:web:4d2babb1960b0d2a6152b3"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
