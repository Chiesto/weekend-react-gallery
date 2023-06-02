import { useState, useEffect } from 'react';

function GalleryItem ({item}) {
    const [isClicked, setIsClicked] = useState(true);

    return(
        <div className='photo'>
        {isClicked ? (
            <img onClick={()=>setIsClicked(!isClicked)}className='photo' src={item.path} ></img>
        ):(
            <p onClick={()=>setIsClicked(!isClicked)}className='photo-description'>{item.description}</p>
        )}
        </div>
    )
}

export default GalleryItem;