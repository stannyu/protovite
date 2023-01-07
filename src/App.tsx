import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';

import { RootComponent } from './components/root-component/root';
import { FolderDetails } from './components/folder/FolderDetails';
import { BoardComponent } from './components/board/BoardComponent';
import { LoginComponent } from './components/login/LoginComponent';
import { NotFoundPageComponent } from './components/404/404';

import { Account, Profile, User } from './components/User';

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
      <Routes>
        <Route path="/login" element={<LoginComponent />} />

        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootComponent />} />
          <Route path="home" element={<RootComponent />} />

          <Route path="board" element={<BoardComponent />}>
            <Route index element={<BoardComponent />} />
            <Route path=":folderId" element={<FolderDetails />} />
          </Route>

          <Route path="user" element={<User />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<NotFoundPageComponent />} />
          </Route>

          <Route path="*" element={<NotFoundPageComponent />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
