import axios from 'axios';
import React from "react";
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';
import Button from '@mui/material/Button';

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
            <Button className="like-btn"variant="outlined"onClick={()=>updateLikes(item.id)}>{item.likes} Likes</Button>
            <Button onClick={()=>deletePic(item.id)}>Delete</Button>
        </div>

        
    )
}

export default GalleryList;