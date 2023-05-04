import { isFocusable } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { FiCheck, FiTrash2 } from 'react-icons/fi'

const Todo = ({ text, todo, todos, setTodos }) => {

    const transfer = (e) => {
        if (e.target.id === 'icon') {
            e.target = e.target.parentElement
        } else {
            e.target = e.target.parentElement.parentElement;
        }
    }

    const deleteHandler = (e) => {
        e.target.parentElement.addEventListener('transitionend', () => {
            setTodos(todos.filter((element) => element.id !== todo.id))
        }
        )

        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, fall: !item.fall
                }
            }

            return item;
        }))

    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className={`todo ${todo.completed ? "completed" : ""} ${todo.fall ? "fall" : ""}`}>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button className='check' onClick={completeHandler}><FiCheck /></button>
            <button className='delete' onClick={deleteHandler} ><FiTrash2 id='icon' onClick={transfer} /></button>

        </div>
    )
}

export default Todo