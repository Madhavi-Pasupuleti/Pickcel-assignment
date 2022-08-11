import { db } from "../firebase";
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const notesCollectionRef = collection(db, "notes");

class crud_operations {

  addNotes = (newNotes) => {
    return addDoc(notesCollectionRef, newNotes)
  };

  updateNotes = (id, updatedNotes) => {
    const notesDoc = doc(db, "notes", id);
    return updateDoc(notesDoc, updatedNotes)
  };

  deleteNotes = (id) => {
    const notesDoc = doc(db, "notes", id);
    return deleteDoc(notesDoc)
  };

  getAllNotes = () => {
    return getDocs(notesCollectionRef);
  };

  // single notes
  getNotes = (id) => {
    const notesDoc = doc(db, "notes", id);
    return getDoc(notesDoc)
  };
   
}

export default new crud_operations()