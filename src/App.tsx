import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div className="my-10 flex">
      <RecursiveComponent fileTree={fileTree} />
    </div>
  );
};

export default App;
