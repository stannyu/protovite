import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PostType } from '../board/BoardComponent';

const FolderDetails = () => {
  const { folderId } = useParams();
  const [post, setPost] = useState<PostType>()

  useEffect(() => {
    let postId = 6;

    axios
      .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((r) => setPost(r.data))
  }, []);

  const PostDetails = (
    <div>
      <h1>🎤{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  )

  return (
    <div>
      <p>Folder id: {folderId}</p>

      {post && PostDetails}
    </div>
  );
};

export { FolderDetails };
