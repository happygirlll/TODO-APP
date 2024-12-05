import React from 'react';
import '../styles/AddTodo.css';

function AddTodo({ addTodo }) {
    return (
        <button className="add-todo" onClick={addTodo}>
            새로운 TODO 추가하기
        </button>
    );
}

export default AddTodo;
