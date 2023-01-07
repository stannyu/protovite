import React, { FunctionComponent } from 'react';
import { PostType } from './BoardComponent';
import { Link } from 'react-router-dom';

import './board.scss';

type SidebarProps = {
    posts: PostType[]
}

const SidebarComponent: FunctionComponent<SidebarProps> = ({posts}) => {
  return (
    <div className="sidebar_wrapper">
      <ul>
        {posts.length > 0 &&
          posts.map(post => (
            <li key={post.id}>
              <Link to={`/board/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { SidebarComponent };
