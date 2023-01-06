import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const folders = [
  { id: '1', title: 'Robin Wieruch' },
  { id: '2', title: 'Sarah Finnley' },
];

const BoardComponent = () => {
  return (
    <div>
      <h2>Board component</h2>
      <ul>
        {folders.map((folder) => (
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>
              {folder.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { BoardComponent };
