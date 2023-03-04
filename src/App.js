// import Note from "./components/Note";
import { useState } from "react";
import {nanoid} from 'nanoid';
import React from "react";
import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";

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
  return (
    <>
   <div className="container">
    <NotesList notes={notes}/>
  
    </div>
    </>
  )
}
export default App;