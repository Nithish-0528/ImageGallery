import React from "react";
import Data from "./Data";
import Button from "./Buttons"


function Gallery(props){

    if(props.item == "flowers"){
        console.log(Data[0])
        return <>
            {
                Data[0].map((image)=>{
                    return <img  src={image.imgUrl}/>
                })
            }
            </>
        
    }
    else if(props.item == "animals"){
        console.log(Data[1]);
        return <>
                {
                    Data[1].map((image) => {
                        return <img src={image.imgUrl} />
                    })
                }
            </>
        
    }
    else if(props.item == "fruits"){
        console.log(Data[2]);
        return <>
                {
                    Data[2].map((image) => {
                        return <img src={image.imgUrl} />
                    })
                }
            </>
        
    }
    else{
        return ""
    }
}

// export default Gallery;
