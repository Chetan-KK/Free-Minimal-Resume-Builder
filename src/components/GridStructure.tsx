import { ReactNode } from "react";
import SidePanel from "./SidePanel";
import Resume from "./Resume";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

const GridStructure = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal" className="max-h-screen">
        <ResizablePanel defaultSize={2} minSize={2} maxSize={2} className="p-3">
          <SidePanel />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={35} minSize={25}>
          <div className="overflow-y-auto h-screen p-3 pt-6">{children}</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={63} minSize={61}>
          <div className="overflow-auto h-screen">
            <Resume />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="fixed right-5 bottom-3">
        <Link to={"/preview"}>
          <Button>Preview</Button>
        </Link>
      </div>
    </div>
  );
};

export default GridStructure;
