import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanal from "./components/ResizablePanal";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div className="flex bg-black text-white h-screen w-screen">
      <ResizablePanal
        left={<RecursiveComponent fileTree={fileTree} />}
        right={<Preview />}
        defaultLayout={[20, 80]}
        showLeft={true}
      />
    </div>
  );
};

export default App;
