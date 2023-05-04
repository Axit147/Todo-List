import React from 'react';
import { MdOutlineAddCircle } from 'react-icons/md'


const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000, fall: false }
    ]);
    setInputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div className='form'>
      <form >
        <div className="box">
          <input value={inputText} onChange={inputTextHandler} type="text" />
          <button onClick={submitHandler} className='addBtn' type='submit'><MdOutlineAddCircle /></button>
        </div>
        <div className="categories">
          <select onChange={statusHandler} name="" id="">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form;