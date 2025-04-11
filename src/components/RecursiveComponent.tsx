import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import BottomArrowIcon from "./SVG/BottomArrowIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";
import { useState } from "react";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { name, isFolder, Children },
}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handdlers
  const toggle = () => {
    setIsOpen((prev) => !prev);
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
            <div className="flex items-center">
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
