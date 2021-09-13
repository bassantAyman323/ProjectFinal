
import React,{useState} from "react";
import ImageGrid from "./ImageGrid";
import Inside from "./Inside";

function Home (){
    const [file,setFile]= useState(null);
    const Types =['image/png','image/jpeg'];
    const  [error, setError]=useState(null);
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
         <input type="file" onChange={changeHandler}/>
         <div className="result">
             {error &&<div className="error">{error}</div>}
             {file &&<div >{file.name}</div>}
             {file &&<Inside file={file} setFile={setFile}/>}
         </div>
     </form>
     <ImageGrid/>
     </>
    );
    }
export default Home;