import { Minus, Square, X } from "lucide-react";
import { Button } from "./ui/button";

<<<<<<< HEAD
export const TitleBar = () => {
=======
const TitleBar = () => {
  const handleMinimize = () => {
    window.electron.minimize();
  };

  const handleMaximize = () => {
    window.electron.maximize();
  };

  const handleClose = () => {
    window.electron.close();
  };

>>>>>>> ac74bf4433a1e3e9816d36dc2bc854f4dd70db87
  return (
    <div
      style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
      className="flex h-10 items-center justify-between  bg-white dark:bg-zinc-900 px-4"
    >
      <div className="flex items-center space-x-2">
        <div className="flex space-x-2">
          <button className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600">
            <X className="h-3 w-3 text-transparent hover:text-white" />
          </button>
          <button className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600">
            <Minus className="h-3 w-3 text-transparent hover:text-white" />
          </button>
          <button className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600">
            <Square className="h-3 w-3 text-transparent hover:text-white" />
          </button>
        </div>
        <span className="ml-4 text-sm font-medium text-foreground">
          EasyNotes
        </span>
      </div>
      <div
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
        className="flex items-center gap-1"
      >
        <Button
          variant="ghost"
<<<<<<< HEAD
          onClick={() => window.electron.minimize()}
=======
          onClick={handleMinimize}
>>>>>>> ac74bf4433a1e3e9816d36dc2bc854f4dd70db87
          size="icon"
          className="h-8 w-8 rounded-none text-foreground hover:bg-white/10"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
<<<<<<< HEAD
          onClick={() => window.electron.maximize()}
=======
          onClick={handleMaximize}
>>>>>>> ac74bf4433a1e3e9816d36dc2bc854f4dd70db87
          size="icon"
          className="h-8 w-8 rounded-none text-foreground hover:bg-white/10"
        >
          <Square className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
<<<<<<< HEAD
          onClick={() => window.electron.close()}
=======
          onClick={handleClose}
>>>>>>> ac74bf4433a1e3e9816d36dc2bc854f4dd70db87
          className="h-8 w-8 rounded-lg bg-red-500 text-white hover:bg-red-600"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
<<<<<<< HEAD
=======

export default TitleBar;
>>>>>>> ac74bf4433a1e3e9816d36dc2bc854f4dd70db87
