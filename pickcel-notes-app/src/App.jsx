import { useState } from 'react';
import './App.css';

import AddNotes from './components/AddNotes';
import NotesList from './components/NotesList';

function App() {
  const [notesId, setNotesId] = useState("");

  const getNotesIdHandler = (id) => {
    //console.log(id)
    setNotesId(id)
  }

  return (
    <div className="App">
      <ul>
        <li>
          <img src="https://www.pickcel.com/assets/img/pickcel-logo.svg" alt="" />
        </li>
      </ul>
      <br />
      <AddNotes id={notesId} setNotesId={setNotesId} />
      <br />
      <NotesList getNotesId={getNotesIdHandler}/>
    </div>
  );
}

export default App;
