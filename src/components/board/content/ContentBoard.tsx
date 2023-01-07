import React from 'react';
import { Outlet } from 'react-router-dom';

import '../board.scss';

const ContentBoard = () => {
  return (
    <div className="content_wrapper">
      <h2>Board Content component</h2>
      <Outlet />
    </div>
  );
};

export { ContentBoard };
