// import Note from "./components/Note";
import { useState } from "react";
import {nanoid} from 'nanoid';
import React from "react";
import NotesList from "./components/NotesList";

const App = ()=>{
  const [notes,setNOtes]=useState([{
    id:nanoid(),
    text:"This is my first note!",
    date :"15/04/2021"
  },
  {
    id:nanoid(),
    text:"This is my first note!",
    date :"15/04/2021"
  },
  {
    id:nanoid(),
    text:"This is my first note!",
    date :"15/04/2021"
  },
  {
    id:nanoid(),
    text:"This is my first note!",
    date :"15/04/2021"
  }
]);
    const addNote = (text)=>{
      const date =new Date();
      const newNote={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString(),
      }
      const newNotes = [...notes,newNote];
      setNOtes(newNotes);
    }
  return (
    <>
   <div className="container">
    <NotesList notes={notes} handleAddNote={addNote}/>
  
    </div>
    </>
  )
}
export default App;