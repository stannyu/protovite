import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SidebarComponent } from './SidebarComponent';
import { ContentBoard } from './content/ContentBoard';

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
      <h2>Board component</h2>
      <SidebarComponent posts={posts} />
      <ContentBoard />
    </div>
  );
};

export { BoardComponent };
