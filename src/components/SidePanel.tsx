import {
  Album,
  CheckCircle,
  FilePlus,
  ScrollText,
  Star,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

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
      icon: ScrollText,
      link: "experience",
    },
    {
      name: "Projects",
      icon: FilePlus,
      link: "projects",
    },
    {
      name: "Awards and Achievements",
      icon: Star,
      link: "achievements",
    },
    {
      name: "Education",
      icon: Album,
      link: "education",
    },
    {
      name: "Certifications",
      icon: CheckCircle,
      link: "certifications",
    },
    {
      name: "Skills",
      icon: Star,
      link: "skills",
    },
  ];

  return (
    <div className=" p-2 pt-0 flex flex-col items-center">
      <div className="font-bold mb-2">RB</div>
      <div className="border-b border-t flex justify-center items-center flex-col gap-3 py-2">
        {options.map((option, _) => (
          <Link to={`/create/${option.link}`} key={_}>
            <Button className="cursor-pointer px-2" variant={"ghost"} key={_}>
              <option.icon className="w-5 aspect-square" />
            </Button>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};

export default SidePanel;
