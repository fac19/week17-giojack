import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCHgDOjPJi-qSP-WWy_Yx74eiJpiYxxVP8",
    authDomain: "teach-a-man-to-phish.firebaseapp.com",
    databaseURL: "https://teach-a-man-to-phish.firebaseio.com",
    projectId: "teach-a-man-to-phish",
    storageBucket: "teach-a-man-to-phish.appspot.com",
    messagingSenderId: "906518215165",
    appId: "1:906518215165:web:6002e8b03ed1d184af8194",
    measurementId: "G-R1Q28PLJV5"
  };

firebase.initializeApp(config);

export default firebase;
