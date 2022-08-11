import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';
import crud_operations from '../crud/crud_operations';

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
        <div>
            <Button variant="info" onClick={getNotes}>Refresh</Button>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {notesNtitle.map((doc,i) => {
                        return (
                            <tr key={doc.id}>
                                <td>{i+1}</td>
                                <td>{doc.title}</td>
                                <td>{doc.startnotes}</td>
                                <td>
                                    <Button variant='secondary' onClick={(e) => getNotesId(doc.id)}>Update</Button>
                                    <Button variant="danger" onClick={(e) => handleDelete(doc.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                   
                </tbody>
            </Table>
        </div>
    )
}

export default NotesList