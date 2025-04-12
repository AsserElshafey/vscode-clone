import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFileBarTab from "./OpenedFileBarTab";

interface IProps {}

const OpenedFileBar = ({}: IProps) => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div>
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFileBarTab key={file.id} file={file} />
        ))}
      </div>
      {clickedFile && (
        <FileSyntaxHighlighter content={clickedFile.fileContent} />
      )}
    </div>
  );
};

export default OpenedFileBar;
