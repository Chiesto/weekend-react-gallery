import { useState } from "react";
import axios from "axios";

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
        <form onSubmit={submit}>
            <label>Picture File Path:</label>&nbsp;
          <input 
            onChange={(event)=>setNewFP(event.target.value)} placeholder='Picture file path'
            value={newFP}/>
          &nbsp;
          <label>Picture Description:</label>
          &nbsp;
          <input 
            onChange={(event)=>setNewDescription(event.target.value)} placeholder='Picture description'
            value={newDescription}
            />
          &nbsp;
          <button type="submit">Add Picture</button>
        </form>
    )
}

export default Form;