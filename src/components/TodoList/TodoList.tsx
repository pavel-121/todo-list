import React from 'react';
import TodoItem from './TodoItem/TodoItem';

interface TodoListPorps {
  todos: Todo[],
  onRemoveTodo: (id: Todo['id']) => void,
  onToggleCompleted: (id: Todo['id']) => void,
}

const TodoList: React.FC<TodoListPorps> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <div className='todo__list'>
      {todos.map((todo) => (
        <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} onToggleCompleted={onToggleCompleted} />
      ))}
    </div>
  );
};

export default TodoList;