import React,{effect, useEffect} from "react";
import useStorage from "../Hocks/useStorage";
const Inside = ({file, setFile})=> {
    const {url,progress}= useStorage(file);
    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile])
  
  console.log(progress,url);
  return(<div className="progress" style={{width:progress+ '%'}}></div>)
  }
  
  export default Inside;