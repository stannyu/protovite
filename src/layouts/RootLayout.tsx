import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './root-layout.scss';

const RootLayout = () => {
  return (
    <div>
      <nav className="nav_header">
        <Link to="/home" className="nav_link">
          Home
        </Link>
        <Link to="/board" className="nav_link">
          Board
        </Link>
        <Link to="/login" className="nav_link">
          To login
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export { RootLayout };
