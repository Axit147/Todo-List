import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filtered }) => {
  return (
    <div className='container'>
      <ul className='list'>
        {filtered.map((todo) => (
          <Todo key={todo.id} text={todo.text} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;