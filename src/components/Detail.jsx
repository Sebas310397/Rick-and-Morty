import {  useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const Detail=()=>{
    const {id} = useParams();
    const [character,setCharacter] = useState({});
    useEffect(() => {
            axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => {
               setCharacter(response.data) 
            });
           
         }, [id]);
    
return(
    <div>
        {
            character.name ? (
                <div>
                    <h2>{character.name}</h2>
                    <h3>{character.status}</h3>
                    <h3>{character.species}</h3>
                    <h3>{character.gender}</h3>
                    <h3>{character.origin?.name}</h3>
                    <img src={character.image} alt="" />
                </div>

            ) : (
                <h3>Loanding...</h3>
            )
        }
        
        
    </div>
)



    // 

    // 
    // 
    // return(
    //     <div>
    //         <Cards character={character} />
    //     </div>
    // )
}

export default Detail;