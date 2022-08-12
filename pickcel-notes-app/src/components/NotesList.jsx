import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Button, Accordion} from 'react-bootstrap';
import crud_operations from '../crud/crud_operations';
import "../noteslist.css"

function NotesList({ getNotesId }) {
    const [notesNtitle, setNotesNTitle] = useState([]);

    useEffect(() => {
        getNotes();
    },[]);

    const getNotes = async () => {
        const data = await crud_operations.getAllNotes();
        console.log(data.docs);
        let dt = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setNotesNTitle(dt)
    }

    const handleDelete = async (id) => {
        await crud_operations.deleteNotes(id)
        getNotes()
    }


    return (
        <div className='container'>
            <div className='refresh'>
                <h2>Notes List</h2>
                <Button className='refreshbtn' onClick={getNotes}>Refresh</Button>
            </div>
            <div className='accodian'> 
                {notesNtitle.map((doc,i) => {
                    return(
                        <Accordion key={doc.id} >
                            <Accordion.Item eventKey={i}>
                                <Accordion.Header>
                                    <h5> {doc.title}</h5>
                                </Accordion.Header>
                                <Accordion.Body className='body'>
                                    <div className='notes'>
                                    {doc.startnotes}
                                    </div>
                                    <div className='buttons'>
                                        <Button variant='secondary' onClick={(e) => getNotesId(doc.id)}>Update</Button>
                                        <Button variant="danger" onClick={(e) => handleDelete(doc.id)}>Delete</Button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })}
            </div>
       </div>
    )
}

export default NotesList