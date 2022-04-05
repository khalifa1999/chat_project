import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq52PFSmbUgkh2IZe9DMH-x_7mrXeT5Vc",
    authDomain: "gifted-chat-6f9e2.firebaseapp.com",
    projectId: "gifted-chat-6f9e2",
    storageBucket: "gifted-chat-6f9e2.appspot.com",
    messagingSenderId: "580061665254",
    appId: "1:580061665254:web:8dac016e526598f75c6827"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };