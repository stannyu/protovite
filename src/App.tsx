import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';

import { RootComponent } from './components/root-component/root';
import { FolderDetails } from './components/folder/FolderDetails';
import { BoardComponent } from './components/board/boardComponent';
import { NotFoundPageComponent } from './components/404/404';

import reactLogo from './assets/react.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(import.meta.env.VITE_SOME_KEY); // 123
    console.log(import.meta.env.DB_PASSWORD); // undefined
    console.log(import.meta.env.VITE_MY_CUSTOM_VAR); // undefined
  }, []);

  return (
    <div className="App">
      <nav className='nav_header'>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/board">Board</Link>
      </nav>
      <Routes>
        {/* <Route path='/' element={<RootLayout />}> */}
        <Route index element={<RootComponent />} />
        <Route path="home" element={<RootComponent />} />
        <Route path="/board" element={<BoardComponent />} />
        <Route path="/folder/:folderId" element={<FolderDetails />} />
        <Route path="*" element={<NotFoundPageComponent />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
