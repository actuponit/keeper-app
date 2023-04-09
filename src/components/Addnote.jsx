import React, {useRef} from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';



export default function Addnote({OnClick}) {
    const title = useRef(null)
    const body = useRef(null)
    console.log(body)
    return (
        <form onSubmit={(e) => OnClick(e, title.current, body.current)}>
            <input ref={title} type="text" autoComplete="false" placeholder="Title"/>
            <textarea ref={body} name="content" cols="15" rows="5" placeholder="Take a note..."></textarea>
            <Fab type="submit" className="add-btn" style={{background: "orange"}}>
                <AddIcon style={{color: "white", maxWidth: "40%", maxHeight: "40%"}}></AddIcon>
            </Fab>
        </form>
    )
}