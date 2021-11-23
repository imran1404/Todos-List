import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import React, { useState } from 'react';
import AddTodos from './MyComponents/AddTodos';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const onDelete = (todo) => {
    console.log(todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }

  const addTodo = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }


    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "first",
      desc: "First Desc"
    }
  ]);



  return (
    <>
      <Router>
        <Header title="Todos List" SearchBar={true} />

        <Routes>

          <Route path='/' element={[<AddTodos addTodo={addTodo} />,<Todos todos={todos} onDelete={onDelete} />]} />
          {/* <Route path='/' element={<Todos todos={todos} onDelete={onDelete} />}/> */}
          <Route path='/about' element={<About/>}/>


        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
