import {useState, useEffect} from "react";
import { projectStorage,projectFireStore } from "../firebase/Config";
import { addDoc, collection,getFirestore,Timestamp } from "firebase/firestore"; 
import { getStorage, ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import {   getDocs } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

const useStorage =(file) =>{
    const [progress, setprogress]=useState(0);
    const [error,seterror]=useState(null);
    const [url,setUrl]=useState(null);

 
 
      //Initialize Firebase
useEffect(()=>{
 
    const storage = getStorage();
    const firebase = getFirestore();
    const storageRef = ref(storage,file.name);
    const collectionRef = collection(firebase, 'images');
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percentage);
    setprogress(percentage);

    
  },
//    uploadBytes(storageRef, file).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
        
//         const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setprogress(percentage);
//       },
    // storageRef.put(file).on('state_changed',(snap)=>{
    //     let percentage=(snap.bytesTransferred/ snap.totalBytes)*100;
    //     setprogress(percentage);
    // },
    (err)=>{
        seterror(err);

    },
    async ()=>{
        const url=await 
        getDownloadURL(uploadTask.snapshot.ref);
        // const createdAt=Timestamp();
        
         addDoc(collectionRef,{url});
        
    
          
    
        setUrl(url);
    })
},[file]);
return {progress,url,error}
}
export default useStorage;