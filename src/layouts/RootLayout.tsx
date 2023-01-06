import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './root-layout.scss';

const RootLayout = () => {
  return (
    <div>
      <div className="header">
        <Link to="/board"> Board fr layout</Link>
      </div>
      <Outlet />
    </div>
  );
};

export { RootLayout };
