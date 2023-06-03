import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList({item, getGallery}){


    const updateLikes = (id) =>{
        axios.put(`/gallery/like/${id}`)
            .then(response=>{
                getGallery();
            }).catch(error=>{
                console.log("couldn't update likes=>", error)
            })
    }
    
    const deletePic = (id) =>{
        axios.delete(`/gallery/${id}`)
            .then(response=>{
                getGallery();
            }).catch(error=>{
                console.log('problems in the delete=>', error);
            })
    }
   


    return(

        <div className='photo-div' >
            <GalleryItem item={item}/>
            <br></br>
            <button onClick={()=>updateLikes(item.id)}>{item.likes} Likes</button>
            <button onClick={()=>deletePic(item.id)}>Delete</button>
        </div>

        
    )
}

export default GalleryList;