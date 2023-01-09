import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BASE_URL } from '../../http/todosApi';
import { TodoType } from '../../types/todo';


const FolderDetails = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    if (todoId) {
      axios.get<TodoType>(`${BASE_URL}/todos/${todoId}`).then(r => setTodo(r.data));
    }
  }, [todoId]);

  const TodoDetails = (
    <div>
      <h1>🎤{todo?.title}</h1>
      <p>
        {todo?.id} : {todo?.completed ? '✅' : '❌'}
      </p>
    </div>
  );

  return (
    <div>
      <p>Todo id: {todoId}</p>

      {todo && TodoDetails}
    </div>
  );
};

export { FolderDetails };
