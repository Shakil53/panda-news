// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAjiSx9KP4M-X16VFlmLNqa9In-HAgncg",
    authDomain: "panda-news-be056.firebaseapp.com",
    projectId: "panda-news-be056",
    storageBucket: "panda-news-be056.appspot.com",
    messagingSenderId: "565992968843",
    appId: "1:565992968843:web:725f7764b7a04456cdba8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;