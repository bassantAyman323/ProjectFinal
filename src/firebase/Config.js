 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";

 import { getStorage } from "firebase/storage";
 import { getFirestore } from "firebase/firestore/lite";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDr2ozRFz5b5c-CY-JqoFJs3IOk6oMtDGc",
   authDomain: "bassantandrowan.firebaseapp.com",
   projectId: "bassantandrowan",
   storageBucket: "bassantandrowan.appspot.com",
   messagingSenderId: "484016788281",
   appId: "1:484016788281:web:c3e0b72581be6a3ead8ee8"
 };

 //Initialize Firebase
 const app = initializeApp(firebaseConfig);


const projectStorage=getStorage(app)
const projectFireStore=getFirestore(app);

export{projectStorage, projectFireStore};