import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // functions
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("todos"));
    }
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;

      case "incomplete":
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFiltered(todos);
        break;
    }
  };

  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(getLocalTodos());
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  //run once
  useEffect(() => {
    getLocalTodos();
  }, []);
  // use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // functions

  return (
    <div className="App">
      <h1>My TODO List</h1>
      <div className="div">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
      </div>
    </div>
  );
}

export default App;
