import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFileBarTab";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

interface IProps {}

const OpenedFileBar = ({}: IProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <div
        className="flex items-center border-b-[1px] border-[#ffffff1f]"
        onContextMenu={(e) => {
          e.preventDefault();
          setShowMenu(true);
          setPositions({ x: e.clientX, y: e.clientY });
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFileBarTab key={file.id} file={file} />
        ))}
      </div>
      {showMenu && (
        <ContextMenu positions={positions} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};

export default OpenedFileBar;
