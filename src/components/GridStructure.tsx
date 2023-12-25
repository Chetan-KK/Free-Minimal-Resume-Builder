import { ReactNode } from "react";
import SidePanel from "./SidePanel";
import Resume from "./Resume";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const GridStructure = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[auto_repeat(2,1fr)] grid-rows-[1fr] gap-1 p-1 h-screen">
      <SidePanel />
      <section className="border-border border mr-0 p-3">{children}</section>
      <section className="border-border border">
        <Resume />
      </section>
      <div className="fixed right-5 bottom-3">
        <Link to={"/preview"}>
          <Button>Preview</Button>
        </Link>
      </div>
    </div>
  );
};

export default GridStructure;
