import React from 'react';
import TodoItem from './TodoItem/TodoItem';

interface TodoListPorps {
  todos: Todo[],
  onRemoveTodo: (id: Todo['id']) => void,
  onToggleCompleted: (id: Todo['id']) => void,
  onChangeTodo: (id: Todo['id'], value: string) => void,
}

const TodoList: React.FC<TodoListPorps> = ({ todos, onChangeTodo, onRemoveTodo, onToggleCompleted }) => {
  return (
    <div className='todo__list'>
      {!todos.length && (<p className='todo__empty'>Список пуст</p>)}
      {todos.map((todo) => (
        <TodoItem todo={todo} onChangeTodo={onChangeTodo} onRemoveTodo={onRemoveTodo} onToggleCompleted={onToggleCompleted} />
      ))}
    </div>
  );
};

export default TodoList;