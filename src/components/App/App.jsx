import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Form from '../Form/Form';



function App() {
    const [galleryList, setGalleryList] = useState([]);
    const getGallery = () =>{
        axios.get('/gallery')
        .then(response =>{
            console.log('got the gallery!', response.data);
            setGalleryList(response.data);
        }).catch(error =>{
            // alert('Problems getting the gallery');
            console.log('PROBLEMS=>', error);
        })
    }
    useEffect(()=>{
        getGallery();
    }, []);


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h2>My Gallery</h2>
        <Form getGallery={getGallery}/>
        <div className='gallery-div'>
        {galleryList.map(item=>(
          <GalleryList key={item.id} getGallery={getGallery} item={item}/>
        ))}
        
        </div>
        <footer>What a happy gallery</footer>
      </div>
    );
  }


export default App;
