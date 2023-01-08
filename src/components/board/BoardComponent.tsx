import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SidebarComponent } from './SidebarComponent';

import './board.scss';

export type PostType = {
  id: string;
  title: string;
  body: string;
};

const BoardComponent = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    axios.get<PostType[]>('https://jsonplaceholder.typicode.com/posts').then(r => setPosts(r.data.slice(0, 10)));
  }, [posts.length]);

  return (
    <div className="board_wrapper">
      <SidebarComponent posts={posts} />
      <div className="content_wrapper">
        <h2>Board Content component</h2>
        <Outlet />
      </div>
    </div>
  );
};

export { BoardComponent };
