import { ResponseType, Todo } from "./todo";

declare global {
  interface Window {
    electron: {
      minimize: () => () => void;
      maximize: () => () => void;
      close: () => () => void;
    };
  }
}

export {};
