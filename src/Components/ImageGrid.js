import react from "react";
import useFireStore from "../Hocks/useFireStore";


const ImageGrid =() =>{
    const {docs}= useFireStore('images');
    console.log(docs);
return(
    <div className="ImageGrid">
    {docs&& docs.map(doc =>(
        <div className="gride" key={doc.id}>
        <img src={doc.url} alt="pic uploaded"/>
        </div>
    ))}
</div>
);

}
export default ImageGrid;