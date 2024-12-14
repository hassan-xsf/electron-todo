import { Todo } from "@/types/todo";

const STORAGE_KEY = "electron-todos";

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const loadTodos = (): Todo[] => {
  const todos = localStorage.getItem(STORAGE_KEY);
  return todos ? JSON.parse(todos) : [];
};

export const editTodo = (id: string, updates: Partial<Todo>): Todo[] => {
  const todos = loadTodos();
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, ...updates } : todo
  );
  saveTodos(updatedTodos);
  return updatedTodos;
};

export const deleteTodo = (id: string): Todo[] => {
  const todos = loadTodos();
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  saveTodos(filteredTodos);
  return filteredTodos;
};
