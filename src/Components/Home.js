
import React,{useState} from "react";
import ImageGrid from "./ImageGrid";
import Inside from "./Inside";
import Modal from './Modal';

function Home (){
    const [file,setFile]= useState(null);
    const Types =['image/png','image/jpeg'];
    const  [error, setError]=useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
 const changeHandler= (e) => {
   
     let selected=e.target.files[0];
     console.log(selected);
     if(selected && Types.includes(selected.type)){
         setFile(selected);
         setError('');
     }else{
         setFile(null);
         setError('please select photo with (jpg or png type)');
     }
 }

    return(
        <>
     <form>
     <label>
         <input type="file" onChange={changeHandler}/>
         <span>+</span>
         </label>
         <div className="result">
             {error &&<div className="error">{error}</div>}
             {file &&<div >{file.name}</div>}
             {file &&<Inside file={file} setFile={setFile}/>}
         </div>
     </form>
     {/* <ImageGrid/> */}
     <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && 
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
     </>
    );
    }
export default Home;