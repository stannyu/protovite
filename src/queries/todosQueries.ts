import { queryClient } from '../QueryClient';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../http/todosApi';

const getTodoQuery = { queryKey: ['todos'], queryFn: getTodos };

const addTodoMutationQuery = {
  mutationFn: addTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
};

const updateTodoMutationQuery = {
  mutationFn: updateTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
};

const deleteTodoMutationQuery = {
  mutationFn: deleteTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  },
};

export { addTodoMutationQuery, updateTodoMutationQuery, deleteTodoMutationQuery, getTodoQuery };
