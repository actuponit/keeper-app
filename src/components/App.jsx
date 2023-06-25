import React, {useState, useEffect} from "react"
import Header from "./Header";
import Footer from "./Footer";
import Addnote from "./Addnote";
import Note from "./Note";

const notes = []

function wait() {
    return new Promise(resolve => {
        setTimeout(resolve, 400)
    })
}

function App() {

    const [note, changeNote] = useState(notes)
    const [newKey, updateKey] = useState(26)

    useEffect(()=>{
        fetch("/api").then((res)=>{
            console.log(res)
            return res.json()}).catch((e)=>console.log(e))
    })

    function addNotes(e, titleField, bodyField) {
        
        e.preventDefault();
        
        let newTitle = titleField.value; 
        const newBody = bodyField.value;
        
        //Handle empty fields
        if(newBody.trim() === "") return;
        else if (newTitle.trim() === "") newTitle = "Untitled";
        
        changeNote( prevValue => ([...prevValue, {
            key: newKey, 
            title: newTitle,
            content: newBody
        }
        ])
        )

        //emptying the fields after submit
        titleField.value = ""
        bodyField.value = ''

        //updating the key 
        updateKey(newKey+10)
    }

    function deleteNotes(e, key) {

        //Show effect when deleted
        let curr = e.target.parentNode;
        while(!curr.classList.contains('note')) curr = curr.parentNode; //traverse to the note container
        curr.style.opacity = 0
        
        //After the effect has finished do the real job
        wait().then(()=>{
            changeNote(prevValue => 
                prevValue.filter(value => value.key !== key)
            )
        })

    }

    return (
    <>
    <Header />
    <Addnote OnClick = {addNotes}/>
    
    <div className="container">
        {
        note.length === 0 ? <h1>Please add some notes!</h1> :
        note.map((note) => 
            <Note key={note.key} id={note.key} title={note.title} content={note.content} OnClick={deleteNotes}/>
        )}
    </div>
    <Footer />
    </>
    );
}

export default App