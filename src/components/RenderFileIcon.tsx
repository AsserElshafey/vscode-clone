import { extensionIconPaths } from "../constants/index";
import IconImg from "./IconImg";
import FileIcon from "./SVG/file";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;

    console.log(extensionIconPaths[extension]);
    return <IconImg src={iconPath} />;
  }

  if (isFolder && isOpen)
    return <IconImg src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;

  return <FileIcon />;
};

export default RenderFileIcon;
