import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div className="flex bg-black text-white h-screen w-screen">
      <RecursiveComponent fileTree={fileTree} />
      <OpenedFileBar />
    </div>
  );
};

export default App;
