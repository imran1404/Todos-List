
import React, { useState } from 'react';

const AddTodos = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
            e.preventDefault();
            if(!title || !desc){
                alert("Title or Description Cannot be Blank")
            }
            props.addTodo(title, desc);
    }
    return (
        <div className="container my-3">
            <h3 className="text-center">Add Our Todos</h3>
            <form onSubmit={submit} className="container">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodos
