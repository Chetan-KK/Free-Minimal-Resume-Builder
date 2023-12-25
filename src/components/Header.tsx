import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2 border-b-border border-b">
      <div className="font-bold">Resume Builder</div>
      <div className="flex justify-center gap-3 items-center">
        <Link to={"/create/user"}>
          <Button>Create Resume</Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
