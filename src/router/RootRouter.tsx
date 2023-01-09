import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoginComponent } from '../components/login/LoginComponent';

import { RootLayout } from '../layouts/RootLayout/RootLayout';
import { RootComponent } from '../components/root/root';
import { BoardComponent } from '../components/board/BoardComponent';
import { FolderDetails } from '../components/folder/FolderDetails';

import { Account, Profile, User } from '../components/user/User';

import { NotFoundPageComponent } from '../components/404/404';

const RootRouter = () => {
  return (
    <>
       <Routes>
        <Route path="/login" element={<LoginComponent />} />

        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootComponent />} />
          <Route path="home" element={<RootComponent />} />

          <Route path="board" element={<BoardComponent />}>
            {/* <Route index element={<BoardComponent />} /> */}
            <Route path="folder/:todoId" element={<FolderDetails />} />
          </Route>

          <Route path="user" element={<User />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<NotFoundPageComponent />} />
          </Route>

          <Route path="*" element={<NotFoundPageComponent />} />
        </Route>

        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
    </>
  );
};

export default RootRouter;
