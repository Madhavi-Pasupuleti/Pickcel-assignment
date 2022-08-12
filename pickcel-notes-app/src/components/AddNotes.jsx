import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Alert, Button, Form } from 'react-bootstrap';
import crud_operations from "../crud/crud_operations";
import "../addnotes.css"

function AddNotes({id, setNotesId}) {
    const [title, setTitle] = useState("");
    const [startnotes, setStartnotes] = useState("");
    const [errormsg, setErrormsg] = useState({error : false, msg : ""})

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErrormsg("");

        if(title === "" || startnotes === ""){
            setErrormsg({ error : true, msg : "Enter Title and Notes" })
            return
        }

        const newNotes = {
            title,
            startnotes
        }
        console.log("newbook", newNotes);

        try{
            if(id !== undefined && id !== ""){
                await crud_operations.updateNotes(id, newNotes);
                setNotesId("")
                setErrormsg({error: false, msg : "Updated Successfully!"});
            }
            else{
                await crud_operations.addNotes(newNotes);
                setErrormsg({error: false, msg : "New Notes added Successfully!"});
            }
           
        }
        catch(err){
            setErrormsg({error : true, msg : err.message})
        }

        setTitle("");
        setStartnotes("");
    }

    const updateHandler = async() => {
        setErrormsg("");
        try{
            const docs = await crud_operations.getNotes(id);
            setTitle(docs.data().title);
            setStartnotes(docs.data().startnotes);
        }
        catch(err){
            setErrormsg({error : true, msg : err.message})
        }
    }

    useEffect(() => {
        
        if(id !== undefined && id !== ""){
            updateHandler()
        }
    },[id])

    return (
        <div className="container">
            <h1>Enter Notes</h1>
            <div>
                {errormsg?.msg && (
                <Alert 
                variant = {errormsg?.error ? "danger" : "success"}
                dismissible 
                onClose={() => setErrormsg("")}
                >
                {" "}
                {errormsg?.msg}
                </Alert>
                )}
            </div>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNotesTitle">
                    <Form.Label className='title'>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Notes Title" 
                        value={title} 
                        onChange = {(e) => setTitle(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNotes">
                    <Form.Label className='title'>Notes</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Start Notes" 
                        value={startnotes}
                        onChange = {(e) => setStartnotes(e.target.value)} 
                    />
                </Form.Group>
                
                <Button className='createbtn' type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
}

export default AddNotes