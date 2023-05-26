import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import { addFavorite } from "../redux/actions";
import { removeFavorite } from "../redux/actions";
import { useState, useEffect } from "react";



function Card({id,name,status,species,gender,origin,image,onClose,addFavorite,removeFavorite,myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      }else{
             setIsFav(true);
             addFavorite({id,name,status,species,gender,origin,image,onClose,addFavorite,removeFavorite})
      }

   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
     
        
      <div>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
          <button onClick={()=>onClose(id)}>X</button>
      <Link to={`/detail/${id}`}> 
         <h2>{name}</h2>
      </Link> 
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
          
      </div>
   );
}


const mapDispatchToProps= (dispatch)=>{
   return{
      addFavorite: (characters)=>{dispatch(addFavorite(characters))},
      removeFavorite: (id)=>{dispatch(removeFavorite(id))}
   }
   
}

const mapStateToProps =(state)=>{
return{
   myFavorites: state.myFavorites
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)