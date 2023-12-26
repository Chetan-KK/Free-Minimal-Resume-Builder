import { ReactNode, useEffect, useState } from "react";
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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isDesktop ? (
        <>
          <ResizablePanelGroup direction="horizontal" className="max-h-screen">
            <ResizablePanel
              defaultSize={2}
              minSize={2}
              maxSize={2}
              className="p-3"
            >
              <SidePanel />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={35} minSize={25}>
              <div className="overflow-y-auto h-screen p-3 pt-6">
                {children}
              </div>
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
        </>
      ) : (
        <>
          <div className="flex">
            <div className="pt-3 border-r">
              <SidePanel />
            </div>
            <div className="p-3 w-full h-screen overflow-hidden overflow-y-scroll">
              {children}
            </div>
            <div className="fixed right-5 bottom-3">
              <Link to={"/preview"}>
                <Button>Preview</Button>
              </Link>
            </div>
          </div>

          {/* <ResizablePanelGroup direction="horizontal" className="max-h-screen">
            <ResizablePanel
              defaultSize={10}
              minSize={10}
              maxSize={10}
              className="p-3"
            >
              <SidePanel />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={90} minSize={90}>
              <div className="overflow-y-auto h-screen p-3 pt-6">
                {children}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
           */}
        </>
      )}
    </div>
  );
};

export default GridStructure;
