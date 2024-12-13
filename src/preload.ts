// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { Todo } from "./types/todo";

// Expose a method to send the 'create-todo' event to the main process
contextBridge.exposeInMainWorld("electron", {
  createTodo: (todo: Omit<Todo, "id">) =>
    ipcRenderer.invoke("create-todo", todo),
  healthCheck: (msg: string) => ipcRenderer.send("health-check", msg),
});
