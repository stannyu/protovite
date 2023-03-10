import { queryClient } from '../QueryClient';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../http/todosApi';
import { TodoType } from '../types/todo';

const getTodoQuery = {
  queryKey: ['todos'],
  queryFn: getTodos,
  select: (data: TodoType[]) => data.filter((d: TodoType) => d.userId === 2),
};

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
