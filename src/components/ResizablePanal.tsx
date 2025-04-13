import { ReactNode } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  left: ReactNode;
  right: ReactNode;
  showLeft?: boolean;
}

const ResizablePanal = ({
  defaultLayout = [30, 70],
  left,
  right,
  showLeft,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSave="conditional"
    >
      {showLeft && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>
            {left}
          </Panel>
          <PanelResizeHandle className="border-r border-gray-500" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>{right}</Panel>
    </PanelGroup>
  );
};

export default ResizablePanal;
