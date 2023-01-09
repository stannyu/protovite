import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { TodoType } from '../../types/todo';

import './board.scss';

type SidebarProps = {
  todos: TodoType[];
};

const SidebarComponent: FunctionComponent<SidebarProps> = ({ todos }) => {
  return (
    <div className="sidebar_wrapper">
      <ul>
        {todos.length > 0 &&
          todos.map(todo => (
            <li key={todo.id}>
              <Link to={`/board/folder/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { SidebarComponent };
