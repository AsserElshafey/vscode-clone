import { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "Vs Code Clone",
  isFolder: true,
  Children: [
    {
      name: "node_modules",
      isFolder: true,
      Children: [
        {
          name: "react",
          isFolder: true,
          Children: [
            { name: "index.ts", isFolder: false },
            { name: "Button.tsx", isFolder: false },
          ],
        },
      ],
    },
    {
      name: "components",
      isFolder: true,
      Children: [
        { name: "App.tsx", isFolder: false },
        { name: "RecursiveComponent.tsx", isFolder: false },
      ],
    },
  ],
};
