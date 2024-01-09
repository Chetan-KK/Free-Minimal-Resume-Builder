import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center sm:flex-row gap-3 sm:pt-2 pt-4 flex-col px-5 py-2 border-b-border border-b">
      <Link to={"/"}>
        <div className="font-bold flex sm:flex-col leading-4">
          <p>F.M.</p>
          <p>R.B.</p>
        </div>
      </Link>
      <div className="flex justify-center gap-1 sm:gap-3 items-center">
        <Link to={"/about"}>
          <Button variant={"link"}>About</Button>
        </Link>
        <a
          href="https://github.com/Chetan-KK/Free-Minimal-Resume-Builder"
          target="_blank"
        >
          <Button variant={"link"}>
            Github{" "}
            <ExternalLink
              style={{ marginLeft: "3px", marginBottom: "2px" }}
              height={15}
              width={15}
            />
          </Button>
        </a>
        <Link to={"/create/user"}>
          <Button variant={"outline"}>Create Resume</Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
