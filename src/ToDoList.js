import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const ToDoList = (props) => {
    return(
        <div className="list-style">
            <span onClick={props.onclick.bind(this, props.list)}><DeleteOutlineIcon className="btn-delete"/></span>
            <li> {props.list} </li>
        </div>
    );
}
export default ToDoList;