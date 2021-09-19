import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVLGH7xBZ52i58eN5FhIm4b_qm6QRiPYQ",
  authDomain: "vaccinationcrud.firebaseapp.com",
  databaseURL: "https://vaccinationcrud-default-rtdb.firebaseio.com",
  projectId: "vaccinationcrud",
  storageBucket: "vaccinationcrud.appspot.com",
  messagingSenderId: "887891219336",
  appId: "1:887891219336:web:8a65ed13a6f70b6967603d",
  measurementId: "G-L3GXCBTDNX",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
