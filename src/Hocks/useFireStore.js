
import {useState, useEffect} from "react";
import {getFirestore,onSnapshot,collection } from "firebase/firestore"; 
import { projectStorage,projectFireStore } from "../firebase/Config";

const useFireStore= (collection2) =>{
    const[docs,setdocs]= useState([]);

    useEffect(()=>{
        const firebase = getFirestore();
        const q= collection(firebase,collection2);
        const unsub=onSnapshot(q,(snap) =>{
            let documents=[];
            snap.forEach(doc =>{
                documents.push({...doc.data(),id:doc.id});
            });
            setdocs(documents);
        })
  return()=> unsub();
    },[collection])
    return{docs};
}
export default useFireStore;