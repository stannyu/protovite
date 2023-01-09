import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getTodoQuery } from '../../queries/todosQueries';

import './board.scss';

const SidebarComponent: FunctionComponent = (): JSX.Element => {
  const { data: todosData, isLoading, isError, error } = useQuery(getTodoQuery);

  useEffect(() => {
    console.log('Sidebar query: ', todosData);
  }, [todosData]);

  return (
    <div className="sidebar_wrapper">
      <ul>
        {todosData &&
          todosData.map(todo => (
            <li key={todo.id}>
              <Link to={`/board/folder/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { SidebarComponent };
