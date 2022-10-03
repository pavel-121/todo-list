import React from 'react';
import './App.scss';
import Header from './components/Header';
import TaskField from './components/TaskField';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([
    {
      id: 1,
      text: 'Изучение HTML',
      completed: false
    },
    {
      id: 2,
      text: 'Изучение CSS',
      completed: true
    },
    {
      id: 3,
      text: 'Изучение JS',
      completed: false
    }
  ])

  const onAddTodo = (text: Todo['text']) => {
    setTodos([
      ...todos, {
        id: Date.now(),
        text: text,
        completed: false
      }
    ])
  }

  const onRemoveTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onToggleCompleted = (id: Todo['id']) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo))
  }

  return (
    <div className='todo'>
      <Header />
      <TaskField onAddTodo={onAddTodo} />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onToggleCompleted={onToggleCompleted} />
    </div>
  );
}

export default App;
