import axios from 'axios';
import { TodoType } from '../types/todo';

const BASE_URL = 'http://localhost:4000';
const TYPICODE_URL = 'https://jsonplaceholder.typicode.com';

const todosApi = axios.create({
  baseURL: BASE_URL,
});

const getTodos = async () => {
  const response = await todosApi.get<TodoType[]>('/todos');
  let todos = response.data;
  return todos;
};

const addTodo = async (todo: TodoType) => {
  return await todosApi.post<TodoType>('/todos', todo);
};

const updateTodo = async (todo: TodoType) => {
  return await todosApi.patch<TodoType>(`/todos/${todo.id}`, todo);
};

const deleteTodo = async (todoId: string) => {
  return await todosApi.delete(`/todos/${todoId}`);
};

export { todosApi, getTodos, addTodo, updateTodo, deleteTodo, BASE_URL };
