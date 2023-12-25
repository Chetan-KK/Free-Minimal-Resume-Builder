import { FormEvent, useEffect, useState } from "react";
import GridStructure from "@/components/GridStructure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useExperienceData } from "@/lib/data";
import { Textarea } from "@/components/ui/textarea";

interface ExperienceData {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
  [key: string]: string;
}

const Experience = () => {
  const { experienceData, setExperienceData } = useExperienceData();
  const [experiences, setExperiences] =
    useState<ExperienceData[]>(experienceData);

  useEffect(() => {
    const storedData = localStorage.getItem("experienceData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setExperiences(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("experienceData", JSON.stringify(experiences));
  }, [experiences]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        companyName: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const handleRemoveExperience = (index: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("experienceData", JSON.stringify(experiences));
    setExperienceData(experiences);
  };

  return (
    <GridStructure>
      <h1 className="font-bold text-2xl">Experience</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Experience {index + 1}</div>
              <Button
                type="button"
                variant={"destructive"}
                className=""
                onClick={() => handleRemoveExperience(index)}
              >
                Remove
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`title-${index}`}>
                  Title
                </Label>
                <Input
                  type="text"
                  id={`title-${index}`}
                  value={experience.title}
                  onChange={(e) =>
                    handleExperienceChange(index, "title", e.target.value)
                  }
                  placeholder="Job Title"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`companyName-${index}`}>
                  Company Name
                </Label>
                <Input
                  type="text"
                  id={`companyName-${index}`}
                  value={experience.companyName}
                  onChange={(e) =>
                    handleExperienceChange(index, "companyName", e.target.value)
                  }
                  placeholder="Company Name"
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
                  value={experience.startDate}
                  onChange={(e) =>
                    handleExperienceChange(index, "startDate", e.target.value)
                  }
                  placeholder="Start Date"
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
                  value={experience.endDate}
                  onChange={(e) =>
                    handleExperienceChange(index, "endDate", e.target.value)
                  }
                  placeholder="End Date"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`description-${index}`}>
                  Description
                </Label>
                <Textarea
                  id={`description-${index}`}
                  value={experience.description}
                  onChange={(e) =>
                    handleExperienceChange(index, "description", e.target.value)
                  }
                  className="h-48"
                  placeholder="Description"
                  required
                ></Textarea>
              </div>
            </div>
          </div>
        ))}
        <Button type="button" onClick={handleAddExperience} className="mb-4">
          Add Experience
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </GridStructure>
  );
};

export default Experience;
