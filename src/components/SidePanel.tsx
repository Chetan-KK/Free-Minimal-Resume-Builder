import {
  Album,
  BookmarkPlus,
  FilePlus,
  GraduationCap,
  ScrollText,
  Star,
  Trophy,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const SidePanel = () => {
  const options = [
    {
      name: "User info",
      icon: User,
      link: "user",
    },
    {
      name: "Summary",
      icon: ScrollText,
      link: "summary",
    },
    {
      name: "Experience",
      icon: BookmarkPlus,
      link: "experience",
    },
    {
      name: "Projects",
      icon: FilePlus,
      link: "projects",
    },
    {
      name: "Awards and Achievements",
      icon: Trophy,
      link: "achievements",
    },
    {
      name: "Education",
      icon: GraduationCap,
      link: "education",
    },
    {
      name: "Certifications",
      icon: Album,
      link: "certifications",
    },
    {
      name: "Skills",
      icon: Star,
      link: "skills",
    },
  ];

  const location = useLocation();

  return (
    <div className=" p-2 pt-0 flex flex-col items-center">
      <Link to={"/"}>
        <div className="font-bold flex flex-col leading-4 mb-2">
          <p>F.M.</p>
          <p>R.B.</p>
        </div>
      </Link>
      <TooltipProvider>
        <div className="border-b border-t flex justify-center items-center flex-col gap-3 py-2">
          {options.map((option, _) => (
            <Tooltip key={_}>
              <TooltipTrigger asChild>
                <Link to={`/create/${option.link}`}>
                  <Button
                    className={`cursor-pointer px-2 ${
                      option.link === location.pathname.split("/")[2] &&
                      "bg-accent"
                    }`}
                    variant={"ghost"}
                    key={_}
                  >
                    <option.icon className="w-5 aspect-square" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{option.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <ModeToggle />
        </div>
      </TooltipProvider>
    </div>
  );
};

export default SidePanel;
