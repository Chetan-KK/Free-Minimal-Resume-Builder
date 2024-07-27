import { FormEvent, useEffect, useState } from "react";
import GridStructure from "@/components/GridStructure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProjectData } from "@/lib/data";
import { Textarea } from "@/components/ui/textarea";

interface ProjectData {
  projectName: string;
  usedLanguages: string;
  startDate: string;
  endDate: string;
  description: string;
  [key: string]: string;
}

const Projects = () => {
  const { projectData, setProjectData } = useProjectData();
  const [projects, setProjects] = useState<ProjectData[]>(projectData);

  useEffect(() => {
    const storedData = localStorage.getItem("projectData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setProjects(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projectData", JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        projectName: "",
        usedLanguages: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleRemoveProject = (index: number) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("projectData", JSON.stringify(projects));
    setProjectData(projects);
  };

  return (
    <GridStructure>
      <h1 className="font-bold text-2xl">Projects</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        {projects.map((project, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Project {index + 1}</div>
              <Button
                type="button"
                variant={"destructive"}
                className=""
                onClick={() => handleRemoveProject(index)}
              >
                Remove
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`projectName-${index}`}>
                  Project Name
                </Label>
                <Input
                  type="text"
                  id={`projectName-${index}`}
                  value={project.projectName}
                  onChange={(e) =>
                    handleProjectChange(index, "projectName", e.target.value)
                  }
                  placeholder="Resume Builder"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`usedLanguages-${index}`}>
                  Used Languages
                </Label>
                <Input
                  type="text"
                  id={`usedLanguages-${index}`}
                  value={project.usedLanguages}
                  onChange={(e) =>
                    handleProjectChange(index, "usedLanguages", e.target.value)
                  }
                  placeholder="React, Tailwind, Zustand..."
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`startDate-${index}`}>
                  Start Date
                </Label>
                <Input
                  type="text"
                  id={`startDate-${index}`}
                  value={project.startDate}
                  onChange={(e) =>
                    handleProjectChange(index, "startDate", e.target.value)
                  }
                  placeholder="Jan-01"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`endDate-${index}`}>
                  End Date
                </Label>
                <Input
                  type="text"
                  id={`endDate-${index}`}
                  value={project.endDate}
                  onChange={(e) =>
                    handleProjectChange(index, "endDate", e.target.value)
                  }
                  placeholder="Dec-31"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`description-${index}`}>
                  Description
                </Label>
                <Textarea
                  id={`description-${index}`}
                  value={project.description}
                  onChange={(e) =>
                    handleProjectChange(index, "description", e.target.value)
                  }
                  className="h-48"
                  placeholder="Implemented session...
Gained users...
Demonstrated visual ex..."
                  required
                ></Textarea>
              </div>
            </div>
          </div>
        ))}
        <Button type="button" onClick={handleAddProject} className="mb-4">
          Add Project
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </GridStructure>
  );
};

export default Projects;
