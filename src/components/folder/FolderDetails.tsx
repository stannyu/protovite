import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FolderDetails = () => {
  const { folderId } = useParams();
  return (
    <div>
      <p>Folder id: {folderId}</p>
    </div>
  );
};

export { FolderDetails };
