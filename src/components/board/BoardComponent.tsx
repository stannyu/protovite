import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { SidebarComponent } from './SidebarComponent';
import { TodoType } from '../../types/todo';

import {
  addTodoMutationQuery,
  deleteTodoMutationQuery,
  updateTodoMutationQuery,
  getTodoQuery,
} from '../../queries/todosQueries';

import './board.scss';

const BoardComponent = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const { data: todosData, isLoading, isError, error } = useQuery(getTodoQuery);

  const addTodoMutation = useMutation(addTodoMutationQuery);
  const updateTodoMutation = useMutation(updateTodoMutationQuery);
  const deleteTodoMutation = useMutation(deleteTodoMutationQuery);

  useEffect(() => {
    console.log('QUERY: ', todosData);
  }, [todosData]);

  const isSubmitDisabled = () => newTodo.length > 0;

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setNewTodo(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('handleSubmit');
    const todoData: TodoType = { title: newTodo, userId: 555, completed: false };
    addTodoMutation.mutate(todoData);
  };

  const todoStatusToggle = (todo: TodoType) => {
    updateTodoMutation.mutate({ ...todo, completed: !todo.completed });
  };

  const deleteTodoHandler = (todo: TodoType) => {
    if (todo.id) {
      deleteTodoMutation.mutate(todo.id);
    }
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
        <p>🤷🏽</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Error is</p>
      </div>
    );
  }

  return (
    <div className="board_wrapper">
      {todosData && <SidebarComponent todos={todosData} />}
      <div className="content_wrapper">
        <h2>Board Content component</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTodo} onChange={handleInputChange} />
          <button type="submit" className="add_btn" disabled={!isSubmitDisabled()}>
            Create Todo!!!
          </button>
        </form>

        {todosData.map(todo => (
          <div className="todo" key={todo.id}>
            <input type="checkbox" checked={todo.completed} id={todo.id} onChange={() => todoStatusToggle(todo)} />
            <label htmlFor={todo.id}>{todo.title}</label>
            <button className="add_btn" onClick={() => deleteTodoHandler(todo)}>
              Delete
            </button>
          </div>
        ))}
        <Outlet />
      </div>
    </div>
  );
};

export { BoardComponent };
