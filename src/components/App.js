// create your App component here
import React, {useState,useEffect} from "react";

function DogImage(){
    const [image, setImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect (()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then(data =>{setImage(data);
            setIsLoaded(true)},[])
    });
    // if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) return <p>Loading...</p>; 

    return(
        <div>
         <img src={image.message} alt="A Random Dog"/>

        </div>

    )
}
export default DogImage





