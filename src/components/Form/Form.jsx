import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import './Form.css'
import TextField from '@mui/material/TextField'

function Form({getGallery}){
    const [newFP, setNewFP] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const submit = (event)=>{
        event.preventDefault();

        axios.post(`/gallery`, {path: newFP, description:newDescription})
        .then(response=>{
            getGallery();
            setNewFP('');
            setNewDescription('');
        }).catch(error=>{
            console.log('issues in the POST =>', error);
        });
    }



    return(
        <form action="/gallery" method="post" encType="multipart/form-data" onSubmit={submit}>
            <label>Picture File Path:</label>&nbsp;
          <TextField 
          type="file" name="avatar"
          variant="standard"
            onChange={(event)=>setNewFP(event.target.value)} placeholder='Picture file path'
            value={newFP}/>
          &nbsp;
          &nbsp;
          &nbsp;
          <label>Picture Description:</label>
          &nbsp;
          <TextField
            variant="standard" 
            onChange={(event)=>setNewDescription(event.target.value)} placeholder='Picture description'
            value={newDescription}
            />
          &nbsp;
          <Button style={{width: '12em'}}variant="contained" type="submit" className="submit-btn">Add Picture</Button>
        </form>
    )
}

export default Form;