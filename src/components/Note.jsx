import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// import white from "@material-ui/core/colors/white";



export default function Note({id, title, content, OnClick}) {
    return (
        <div className="note">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="btn" onClick={(e)=>OnClick(e, id)}> 
        <IconButton>
            <DeleteIcon style={{ color: "white" }} />
        </IconButton>
        </div>
        </div>
    )
}