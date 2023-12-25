import { FormEvent, useEffect, useState } from "react";
import GridStructure from "@/components/GridStructure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSkillsData } from "@/lib/data";

interface SkillData {
  skillType: string;
  skills: string;
  [key: string]: string;
}

const Skills = () => {
  const { skillsData, setSkillsData } = useSkillsData();
  const [skills, setSkills] = useState<SkillData[]>(skillsData);

  useEffect(() => {
    const storedData = localStorage.getItem("skillsData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setSkills(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("skillsData", JSON.stringify(skills));
  }, [skills]);

  const handleAddSkill = () => {
    setSkills([
      ...skills,
      {
        skillType: "",
        skills: "",
      },
    ]);
  };

  const handleSkillChange = (index: number, field: string, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("skillsData", JSON.stringify(skills));
    setSkillsData(skills);
  };

  return (
    <GridStructure>
      <h1 className="font-bold text-2xl">Skills</h1>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Skill {index + 1}</div>
              <Button
                type="button"
                variant={"destructive"}
                className=""
                onClick={() => handleRemoveSkill(index)}
              >
                Remove
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`skillType-${index}`}>
                  Skill Type
                </Label>
                <Input
                  type="text"
                  id={`skillType-${index}`}
                  value={skill.skillType}
                  onChange={(e) =>
                    handleSkillChange(index, "skillType", e.target.value)
                  }
                  placeholder="Skill Type"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor={`skills-${index}`}>
                  Skills
                </Label>
                <Input
                  type="text"
                  id={`skills-${index}`}
                  value={skill.skills}
                  onChange={(e) =>
                    handleSkillChange(index, "skills", e.target.value)
                  }
                  placeholder="Skills"
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <Button type="button" onClick={handleAddSkill} className="mb-4">
          Add Skill
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </GridStructure>
  );
};

export default Skills;
