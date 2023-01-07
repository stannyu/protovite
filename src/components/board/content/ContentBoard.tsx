import React from 'react';
import { Outlet } from 'react-router-dom';

import '../board.scss';

const ContentBoard = () => {
  return (
    <div className="content_wrapper">
      <Outlet />
    </div>
  );
};

export { ContentBoard };
