import { Todo } from "./todo";

declare global {
  interface Window {
    electron: {
      createTodo: (
        todo: Omit<Todo, "id">
      ) => Promise<{ success: boolean; result: any; error: string }>;
      healthCheck: (msg: string) => void;
    };
  }
}

export {};
