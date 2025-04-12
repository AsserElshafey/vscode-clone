import { v4 } from "uuid";
import { IFile } from "../interfaces";

export const fileTree: IFile = {
  id: v4(),
  name: "Vs Code Clone",
  isFolder: true,
  Children: [
    {
      id: v4(),
      name: "node_modules",
      isFolder: true,
      Children: [
        {
          id: v4(),
          name: "react",
          isFolder: true,
          Children: [
            { id: v4(), name: "index.ts", isFolder: false },
            { id: v4(), name: "Button.tsx", isFolder: false },
          ],
        },
      ],
    },
    {
      id: v4(),
      name: "components",
      isFolder: true,
      Children: [
        { id: v4(), name: "App.tsx", isFolder: false },
        { id: v4(), name: "RecursiveComponent.tsx", isFolder: false },
      ],
    },
  ],
};
