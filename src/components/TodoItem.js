import React from 'react';
import '../styles/TodoItem.css';

function TodoItem({ todo, updateTodo, deleteTodo, toggleComplete, toggleEditing, isDragging }) {

    return (
        <div
            className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.editing ? 'editing' : ''} ${isDragging ? 'dragging' : ''
                }`}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                    toggleComplete(todo.id)
                }}
            />
            <input
                type="text"
                value={todo.text}
                disabled={!todo.editing}
                onChange={(e) => updateTodo(todo.id, e.target.value)}
                onBlur={() => toggleEditing(todo.id)}
                className={todo.editing ? 'editing-input' : ''}
            />
            <button className="edit" 
                    onClick={() => {
                        if(todo.editing) {
                            alert('수정 완료')
                        };
                        toggleEditing(todo.id);
                        }
                    }>
                {todo.editing ? '완료' : '수정'}
                
                
            </button>
            <button className="delete" 
                    onClick={() => {
                        deleteTodo(todo.id);
                        alert('삭제 완료');
                    }}>
                삭제
            </button>
        </div>
    );
}

export default TodoItem;