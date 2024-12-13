declare global {
  interface Window {
    electron: {
      createTodo: (todoName: string) => void;
    };
  }
}

export {};
