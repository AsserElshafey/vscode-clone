import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import BottomArrowIcon from "./SVG/BottomArrowIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";
import { useState } from "react";
import { setOpenedFiles } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, Children } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handdlers
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onFileClicked = () => {
    const exist = doesFileExist(openedFiles, id);
    if (exist) return;
    dispatch(setOpenedFiles([...openedFiles, fileTree]));
  };

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center">
        <span className="flex items-center">
          {isFolder ? (
            <div onClick={toggle} className="flex items-center mb-2">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}{" "}
              <RenderFileIcon
                fileName={name}
                isFolder={isFolder}
                isOpen={isOpen}
              />
              <span className="ml-1">{name}</span>
            </div>
          ) : (
            <div className="flex items-center" onClick={onFileClicked}>
              <RenderFileIcon fileName={name} />
              <span className="ml-1">{name}</span>
            </div>
          )}
        </span>
      </div>

      {isOpen &&
        Children &&
        Children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
