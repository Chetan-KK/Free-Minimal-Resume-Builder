import { FormEvent, useEffect, useState } from "react";
import GridStructure from "@/components/GridStructure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEducationData } from "@/lib/data";

interface EducationData {
  universityName: string;
  qualificationName: string;
  result: string;
  startDate: string;
  endDate: string;
  [key: string]: string;
}

const Education = () => {
  const { educationData, setEducationData } = useEducationData();
  const [education, setEducation] = useState<EducationData[]>(educationData);

  useEffect(() => {
    const storedData = localStorage.getItem("educationData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setEducation(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("educationData", JSON.stringify(education));
  }, [education]);

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        universityName: "",
        qualificationName: "",
        result: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleEducationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("educationData", JSON.stringify(education));
    setEducationData(education);
  };

  return (
    <GridStructure>
      <h1 className="font-bold text-2xl">Education</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        {education.map((edu, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Education {index + 1}</div>
              <Button
                type="button"
                variant={"destructive"}
                className=""
                onClick={() => handleRemoveEducation(index)}
              >
                Remove
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`universityName-${index}`}>
                  University Name
                </Label>
                <Input
                  type="text"
                  id={`universityName-${index}`}
                  value={edu.universityName}
                  onChange={(e) =>
                    handleEducationChange(
                      index,
                      "universityName",
                      e.target.value
                    )
                  }
                  placeholder="Savitribai Phule Pune University"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label
                  className="text-sm"
                  htmlFor={`qualificationName-${index}`}
                >
                  Qualification Name
                </Label>
                <Input
                  type="text"
                  id={`qualificationName-${index}`}
                  value={edu.qualificationName}
                  onChange={(e) =>
                    handleEducationChange(
                      index,
                      "qualificationName",
                      e.target.value
                    )
                  }
                  placeholder="Bachelor in Computer Science"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`result-${index}`}>
                  Result
                </Label>
                <Input
                  type="text"
                  id={`result-${index}`}
                  value={edu.result}
                  onChange={(e) =>
                    handleEducationChange(index, "result", e.target.value)
                  }
                  placeholder="8.73 CGPA / pursuing"
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
                  value={edu.startDate}
                  onChange={(e) =>
                    handleEducationChange(index, "startDate", e.target.value)
                  }
                  placeholder="2022"
                  //   required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`endDate-${index}`}>
                  End Date
                </Label>
                <Input
                  type="text"
                  id={`endDate-${index}`}
                  value={edu.endDate}
                  onChange={(e) =>
                    handleEducationChange(index, "endDate", e.target.value)
                  }
                  placeholder="2025"
                  //   required
                />
              </div>
            </div>
          </div>
        ))}
        <Button type="button" onClick={handleAddEducation} className="mb-4">
          Add Education
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </GridStructure>
  );
};

export default Education;
