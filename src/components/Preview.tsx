import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFileBar from "./OpenedFileBar";
import WelcomeTab from "./WelcomeTab";

const Preview = () => {
  const { clickedFile, openedFiles } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <>
      {openedFiles.length ? (
        <>
          <OpenedFileBar />
          <FileSyntaxHighlighter content={clickedFile.fileContent} />
        </>
      ) : (
        <WelcomeTab />
      )}
    </>
  );
};

export default Preview;
