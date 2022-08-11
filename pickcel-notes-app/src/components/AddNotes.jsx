import React from 'react';
import { useState } from 'react';
import {Button, Form } from 'react-bootstrap';

function AddNotes() {
    const [title, setTitle] = useState("");
    const [startnotes, SetStartnotes] = useState("");
  return (
    <>
      <div className="container">
        <Form>
            <Form.Group className="mb-3" controlId="formNotesTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Notes Title" value={title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNotes">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="text" placeholder="Start Notes" value={startnotes}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Create
            </Button>
       </Form>
      </div>
    </>
  )
}

export default AddNotes