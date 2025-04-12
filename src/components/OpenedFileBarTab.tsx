import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);
  // Handlers
  const onClick = () => {
    dispatch(
      setClickedFile({
        fileName: file.name,
        fileContent: file.content,
        activeTabId: file.id,
      })
    );
  };

  const onRemove = (id: string) => {
    const filtered = openedFiles.filter((file) => file.id !== id);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFiles([]));
      dispatch(
        setClickedFile({
          activeTabId: null,
          fileName: "",
          fileContent: "",
        })
      );
      return;
    }
    dispatch(setOpenedFiles(filtered));
    dispatch(
      setClickedFile({
        activeTabId: lastTab.id,
        fileName: lastTab.name,
        fileContent: lastTab.content,
      })
    );
  };

  return (
    <div
      className={`flex items-center cursor-pointer p-2 border-b-2 ${
        activeTabId === file.id ? "border-[#fff]" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="mx-2">{file.name}</span>
      <span
        className="cursor-pointer hover:bg-gray-700 p-1 rounded-sm"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileBarTab;
