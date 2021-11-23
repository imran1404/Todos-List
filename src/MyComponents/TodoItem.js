import React from 'react'

const TodoItem = (props) => {
    return (
        <div>
            <h4>Title: {props.todo.title}</h4>
            <p>Description: {props.todo.desc}</p>
            <button className="btn btn-sm btn-danger mb-3" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        <hr />
        </div>
    )
}

export default TodoItem;
