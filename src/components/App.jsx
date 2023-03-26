import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const notes = [
    {
        title: "Big Idea",
        content: "I have to get better at time mangement skill"
    },
    {
        title: "App Idea",
        content: "this is a note keeper app devolped by me from scratch jsflkjfsjflsjlfjsdlfjsdklfjsdlj"
    },
    {
        title: "Big Idea",
        content: "I have to get better at time mangement skill"
    },
    {
        title: "Big Idea",
        content: "I have to get better at time mangement skill"
    },
    {
        title: "Big Idea",
        content: "I have to get better at time mangement skill"
    },
    {
        title: "Big Idea",
        content: "I have to get better at time mangement skill"
    },
    {
        title: "Big Idea",
        content: "I have to get better at time mangement skill"
    },
    {
        title: "Big Idea",
        content: "I have to get better at time mangement skill"
    }
]

function App() {
    return (
    <>
    <Header />
    <div className="container">
        {notes.map((note) => 
            <Note title={note.title} content={note.content} />
        )}
    </div>
    <Footer />
    </>
    );
}

export default App