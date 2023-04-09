import React, {useState} from "react"
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

    function addNotes(e, titleField, bodyField) {
        
        e.preventDefault();
        
        let newTitle = titleField.value; 
        let newBody = bodyField.value; 
        if(newBody === "") return;
        else if (newTitle === "") newTitle = "Untitled";
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
        console.log(e.target);
        let curr = e.target.parentNode;

        while(!curr.classList.contains('note')) curr = curr.parentNode;

        curr.style.opacity = 0
        
        wait().then(()=>{
            changeNote(prevValue => 
                prevValue.filter(value => value.key !== key)
            )
        })
        // e.target.parentNode.parentNode.style.opacity = "0";

    }
    console.log(note)
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